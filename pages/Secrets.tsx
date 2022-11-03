import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { revealSecrets } from "../redux/secrets/actions";
import { clearSecrets } from "../redux/secrets/secretSlice";
import { RootState } from "../store";

export type SecretsProps = {
 encryptedJSON: string
}

export default function Secrets({ encryptedJSON }: SecretsProps) {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const dispatch = useDispatch();
 const router = useRouter();

 const [revealClicked, setRevealClicked] = useState(false);

 const address = router.query.address as string;
 const { privateKey, mnemonicPhrase } = useSelector((state: RootState) => state.secrets)

 const revealingRef = useRef();
 useEffect(() => {
  return () => {
   if (revealingRef.current) {
    (revealingRef.current as any).abort();
   }

   dispatch(clearSecrets());
  }
 }, []);

 const handleRevealClick = handleSubmit(({ password }) => {
  setRevealClicked(true);
  revealingRef.current = dispatch(revealSecrets({ password, encryptedJSON }));
 });

 const secretsLoaded = privateKey && mnemonicPhrase;

 return (
  <>
   {!secretsLoaded &&
    <form onSubmit={handleRevealClick}>
     <input disabled={revealClicked} {...register('password', { required: true })} type="password" />
     <input disabled={revealClicked} type="submit" value="Reveal secrets" />
    </form>}
   {secretsLoaded && (
    <>
     <div>{privateKey}</div>
     <div>{mnemonicPhrase}</div>
    </>
   )}
  </>
 )
}
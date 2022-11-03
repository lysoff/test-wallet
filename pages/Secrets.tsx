import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/input";
import Submit from "../components/submit";
import { revealSecrets } from "../redux/secrets/actions";
import { clearSecrets } from "../redux/secrets/secretSlice";
import { RootState } from "../redux/store";

import styles from "../styles/Secrets.module.css";

export type SecretsProps = {
 encryptedJSON: string
}

export default function Secrets({ encryptedJSON }: SecretsProps) {
 const {
  reset,
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
  reset();
 });

 const secretsLoaded = privateKey && mnemonicPhrase;

 return (
  <>
   {!secretsLoaded &&
    <form className={styles.secretsForm} onSubmit={handleRevealClick}>
     <Input placeholder="Password" disabled={revealClicked} {...register('password', { required: true })} type="password" />
     <Submit disabled={revealClicked}>Reveal secrets</Submit>
    </form>}
   {secretsLoaded && (
    <div className={styles.container}>
     <div className={styles.privateKey}>{privateKey}</div>
     <div className={styles.mnemonicPhrase}>{mnemonicPhrase}</div>
    </div>
   )
   }
  </>
 )
}
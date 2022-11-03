import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { revealSecrets } from "../redux/secrets/actions";
import { removeWallet } from "../redux/wallets/walletSlice";
import { RootState } from "../store";

export default function Wallet() {
 const dispatch = useDispatch();
 const router = useRouter();
 const address = router.query.address as string;

 const wallet = useSelector((state: RootState) => state.wallets.items[address])
 const { privateKey, mnemonicPhrase } = useSelector((state: RootState) => state.secrets)

 const handleRemoveClick = () => dispatch(removeWallet(address));

 return (
  <>
   <Link href="/">Back</Link>
   <div>
    <div>{address}</div>
    <h1>0.0002</h1>
    <button>Remove</button>
    <button>Reveal secrets</button>
   </div>
  </>
 )
}
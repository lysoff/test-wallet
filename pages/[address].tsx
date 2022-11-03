import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeWallet } from "../redux/wallets/walletSlice";
import { RootState } from "../store";
import Secrets from "./Secrets";

export default function Wallet() {
 const dispatch = useDispatch();
 const router = useRouter();

 const address = router.query.address as string;
 const wallet = useSelector((state: RootState) => state.wallets.items[address])

 const handleRemoveClick = () => dispatch(removeWallet(address));

 return (
  <>
   <Link href="/">Back</Link>
   <div>
    <div>{address}</div>
    <h1>0.0002</h1>
    <Secrets encryptedJSON={wallet.encryptedJSON} />
   </div>
  </>
 )
}
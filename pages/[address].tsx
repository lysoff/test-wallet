import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../redux/balances/actions";
import { removeWallet } from "../redux/wallets/walletSlice";
import { RootState } from "../store";
import Secrets from "./Secrets";

export default function Wallet() {
 const dispatch = useDispatch();
 const router = useRouter();

 const address = router.query.address as string;

 const wallet = useSelector((state: RootState) => state.wallets.items[address])
 const balance = useSelector((state: RootState) => state.balances.balances[address])

 useEffect(() => {
  dispatch(getBalance({ address }))
 }, []);

 const handleRemoveClick = () => dispatch(removeWallet(address));



 return (
  <>
   <Link href="/">Back</Link>
   <br />
   <br />
   <div>
    <div>{wallet.alias} ({address})</div>
    <h1>{balance}</h1>
    <Secrets encryptedJSON={wallet.encryptedJSON} />
   </div>
  </>
 )
}
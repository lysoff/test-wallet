import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../redux/balances/actions";
import { RootState } from "../redux/store";
import Secrets from "./Secrets";

import styles from '../styles/Wallet.module.css';

export default function Wallet() {
 const dispatch = useDispatch();
 const router = useRouter();
 const [showSecrets, setShowSecrets] = useState(false);

 const address = router.query.address as string;

 const wallet = useSelector((state: RootState) => state.wallets.items[address])
 const balance = useSelector((state: RootState) => state.balances.balances[address])

 useEffect(() => {
  dispatch(getBalance({ address }))
 }, []);

 if (!wallet) {
  return "Loading..."
 }

 return (
  <>
   <Head>
    <title>{wallet.alias} - Test Wallet</title>
   </Head>
   <div className={styles.container}>
    <div className={styles.alias}>{wallet.alias}</div>
    <div className={styles.address}>{address}</div>
    <div className={styles.balance}>{balance ?? '--'}</div>

    {showSecrets ? <Secrets encryptedJSON={wallet.encryptedJSON} /> : (
     <span className={styles.showSecrets} onClick={() => setShowSecrets(true)}>Reveal private key and mnemonic phrase</span>
    )}

   </div>
  </>
 )
}
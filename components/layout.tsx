import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initProvider } from "../redux/network/actions";
import { setNetwork } from "../redux/network/networkSlice";
import { RootState } from "../redux/store";
import styles from './layout.module.css';

const networks = ["mainnet", "goerli"];

export default function Layout({ children }: PropsWithChildren) {
 const dispatch = useDispatch();
 const network = useSelector((state: RootState) => state.network.network);
 const initialized = useSelector((state: RootState) => state.app.initialized);

 useEffect(() => {
  if (network) dispatch(initProvider({ network }));
 }, [network]);

 const handleChangeNetwork = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(setNetwork(e.target.value));

  window.location.reload();
 }

 return (
  <>
   <nav className={styles.appBar}>
    <Link href="/">
     <span className={styles.caption}>Test Wallet</span>
    </Link>

    <select value={network} onChange={handleChangeNetwork} className={styles.dropdown}>
     <option>Choose the network</option>
     {networks.map(item => (
      <option key={item} value={item}>{item}</option>
     ))}
    </select>
   </nav>
   <div className={styles.container}>
    <main className={styles.main}>
     {initialized && children}
    </main>
   </div>
  </>
 )
}
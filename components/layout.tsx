import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from './layout.module.css';

const networks = ["mainnet", "goerli"];

export default function Layout({ children }: PropsWithChildren) {

 return (
  <>
   <nav className={styles.appBar}>
    <Link href="/">
     <span className={styles.caption}>Test Wallet</span>
    </Link>

    <select className={styles.dropdown}>
     {networks.map(network => (
      <option key={network} value={network}>{network}</option>
     ))}
    </select>
   </nav>
   <div className={styles.container}>
    <main className={styles.main}>
     {children}
    </main>
   </div>
  </>
 )
}
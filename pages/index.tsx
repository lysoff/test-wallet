import { useDispatch, useSelector } from 'react-redux'

import Head from 'next/head'
import Image from 'next/image'

import WalletForm from './WalletForm';
import { selectWallets } from '../redux/wallets/selectors';
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  const wallets = useSelector(selectWallets);

  return (
    <>
      <Head>
        <title>Wallets</title>
        <meta name="description" content="Test wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletForm />
      <div className={styles.walletList}>
        {wallets.map(wallet => (
          <Link key={wallet.address} href={`/${wallet.address}`}>{wallet.alias} ({wallet.address})</Link>
        ))}
      </div>
    </>
  )
}

import { Provider } from 'react-redux';
import { store } from '../store';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react';
import { initProvider } from '../services/ethers';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initProvider('goerli')
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

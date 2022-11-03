import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react';
import { initProvider } from '../services/ethers';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initProvider('goerli')
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

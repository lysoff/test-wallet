import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react';
import ethService from '../services/ethService';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ethService.initProvider('goerli')
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

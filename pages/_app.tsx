import { Provider, useSelector } from 'react-redux';
import { store, persistor, RootState } from '../redux/store';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react';
import ethService from '../services/ethService';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
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

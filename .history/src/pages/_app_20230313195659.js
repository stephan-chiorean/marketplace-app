import '@/styles/globals.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  console.log(store);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

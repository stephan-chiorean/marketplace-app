import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) 
console.log("THE STORE", store)
{
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

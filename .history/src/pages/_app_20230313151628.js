import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from 'next-redux-wrapper';
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '../app/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const store = useStore((state) => state);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);

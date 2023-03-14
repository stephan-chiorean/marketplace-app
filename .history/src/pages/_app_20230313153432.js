import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { getSession } from 'next-auth/react';
import { useDispatch } from 'react-redux'; // import the useDispatch hook
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '../app/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const dispatch = useDispatch();
  console.log(wrapper.store)
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);

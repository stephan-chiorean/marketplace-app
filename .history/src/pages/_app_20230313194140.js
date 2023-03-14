import '@/styles/globals.css'
import store from "../app/store";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const reduxstore = store
  console.log("STORE HERE", reduxstore)
  return (
    <Provider store = {reduxstore}>
      <Component {...pageProps} />
    </Provider>
  )
}

import '@/styles/globals.css'
import {store} from "../store/store";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  console.log(store)
  return (
      <Component {...pageProps} />
  )
}

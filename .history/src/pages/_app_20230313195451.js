import '@/styles/globals.css'
import {printthis} from "../store/store";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  console.log(printthis)
  return (
      <Component {...pageProps} />
  )
}

import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <h1>Hey PAPAFAM</h1>
      {/* HEADER */}
      <Header/>
    </div>
  );
}

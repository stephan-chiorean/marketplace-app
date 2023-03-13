import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({products}) {
  return (
    <div className="bg-marketplace-light">
      <Head>
        <title>Amazon 2.0</title>
        <meta name="google-site-verification" content="xijmqct2es-6lzE_-ti9zqcF4BNQsGgChEeNbt20ovQ" />
        <meta name="google-site-verification" content="EnaxTToFahyBuxWqxsidVK7QxM8lePSlAE0Umy8j-kw" />
      </Head>

      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>

        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res)=> {
    return res.json()
  });
  return {props: {
    products,
  }}

}
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({products}) {
  console.log("PRODUCTS HERE", products)
  return (
    <div className="bg-marketplace-light">
      <Head>
        <title>Amazon 2.0</title>
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientHome from "./components/ClientHome";

export const metadata = {
  title: "Product Listing Page",
  description: "Browse products with filters and sorting",
};

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <>
      <Header />
      <ClientHome products={products} />
      <Footer />
    </>
  );
}
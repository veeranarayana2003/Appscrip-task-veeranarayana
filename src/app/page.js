import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientHome from "./components/ClientHome";

export const metadata = {
  title: "Product Listing Page",
  description: "Browse products with filters and sorting",
};

export default function Home() {
  return (
    <>
      <Header />
      <ClientHome />
      <Footer />
    </>
  );
}
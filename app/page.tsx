import Banner from "./components/home/Banner";
import Category from "./components/home/category/Category";
import Products from "./components/home/products/Products";

export default function Home() {
  return <div className="">
    <Category/>
    <Banner/>
    <Products/>
  </div>;
}

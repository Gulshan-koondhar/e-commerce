import Products from "@/components/FProducts";
import Productsection from "@/components/Products";

import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Products limit={4} />
      <Productsection limit={8} />
    </>
  );
}

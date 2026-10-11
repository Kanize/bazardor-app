
import Banner from "@/components/HomePageItems/Banner";
import PriceDown from "@/components/HomePageItems/PriceDown";
import PriceUp from "@/components/HomePageItems/PriceUp";
import AllProducts from "./allProducts/page";


export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Banner />
      <PriceUp/>
      <PriceDown/>
      {/* <AllProducts/> */}
      <AllProducts/>
    </div>
  );
}

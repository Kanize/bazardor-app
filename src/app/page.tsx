import AllProducts from "@/components/HomePageItems/AllProducts";
import Banner from "@/components/HomePageItems/Banner";
import PriceDown from "@/components/HomePageItems/PriceDown";
import PriceUp from "@/components/HomePageItems/PriceUp";


export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Banner />
      <PriceUp/>
      <PriceDown/>
      <AllProducts/>
    </div>
  );
}

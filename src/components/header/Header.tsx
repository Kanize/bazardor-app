
import Link from "next/link";
import SignButton from "./SignButton";
import CategoryNav from "./CategoryNav";
import Marquee from "./Marquee";
import Image from "next/image";



const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <div className="">
            <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
                <div className="flex justify-between items-center container mx-auto px-4 py-2 ">

                <Link href="/" className="flex items-center gap-2">
                <div className="h-12 w-12 bg-green-700 rounded-xl p-2 text-2xl text-center" aria-hidden="true">🛒</div>
                
                    
                    <div>
                    <h2>বাজার দর</h2>
                    <p>{date}</p>
                    </div>
                </Link>
                <SignButton />
                </div>
            </header>
            <CategoryNav />
            <Marquee/>
        </div>
    );
};

export default Header;
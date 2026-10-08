import Image from "next/image";
import Link from "next/link";
import SignButton from "./SignButton";
import CategoryNav from "./CategoryNav";
import Marquee from "./Marquee";



const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <div className="">
            <header className="border-b border-gray-200 sticky">
                <div className="flex justify-between items-center container mx-auto px-4 py-2 ">

                <Link href="/" className="flex items-center gap-2">
                    <Image className="h-12 w-12 bg-green-700 rounded-2xl p-2" src="/logo-icon.png" width={50} height={50} alt="Bazardor" />
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
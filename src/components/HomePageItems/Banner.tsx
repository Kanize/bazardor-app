import Image from "next/image";
import Link from "next/link";
import BannerImg from "../../../public/bazar-hero.png";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    });

    const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-3xl bg-white">
            <div className="flex min-h-[400px] flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-12 lg:px-16">
            {/* Left Content */}
            <div className="max-w-2xl">
                {/* Date */}
                <div className="mb-5 inline-block rounded-full bg-[#E1F0E7] px-5 py-2 text-sm font-medium text-green-700 shadow-sm">
                {date}
                </div>

                {/* Heading */}
                <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                আজকের বাজারের দাম এক নজরে
                </h1>

                {/* Description */}
                <p className="mb-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                {/* Button */}
                <Link
                href="/products"
                className="inline-flex items-center rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                সব পণ্য দেখুন
                <span className="ml-2">→</span>
                </Link>
            </div>

            {/* Right Image */}
            <div className="relative flex w-full justify-center md:w-[42%]">
                <Image
                src={BannerImg}
                alt="বাজারদর"
                width={450}
                height={450}
                priority
                className="h-auto w-full max-w-87.5 object-contain lg:max-w-105"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;

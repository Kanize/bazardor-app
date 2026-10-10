import { Iproducts } from "../Type/type";
import ProductCard from "./productCard";

const PriceDown = async () => {
    'use cache'
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const data: Iproducts[] = await res.json();

    const pricesDown = data
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => a.change.pct - b.change.pct)
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="mb-5 flex items-center gap-2">
            <span className="font-bold text-green-600">▼</span>

            <h1 className="text-2xl font-bold text-gray-800">
            আজ দাম কমেছে 
            </h1>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricesDown.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </section>
    );
};

export default PriceDown;
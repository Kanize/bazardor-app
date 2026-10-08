import { Iproducts } from "../Type/type";
import ProductCard from "./productCard";

const PriceUp = async () => {
    'use cache'
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products"
    );

    const data: Iproducts[] = await res.json();

    const pricesUp = data
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="mb-5 flex items-center gap-2">
            <span className="font-bold text-red-600">▲</span>

            <h1 className="text-2xl font-bold text-gray-800">
            আজ দাম বেড়েছে
            </h1>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricesUp.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </section>
    );
};

export default PriceUp;
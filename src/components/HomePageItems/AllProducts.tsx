import { Iproducts } from "../Type/type";
import ProductCard from "./productCard";

const AllProducts = async () => {
    'use cache'
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const products: Iproducts[] = await res.json();

    return (
        <section className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div>

        <div className="mb-5 flex items-center gap-2">
            <span className="font-bold text-green-600">▼</span>

            <h1 className="text-2xl font-bold text-gray-800">
            সব পণ্য
            </h1>
        </div>
            <h3>মোট {products.length}টি পণ্য দেখানো হচ্ছে</h3>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </section>
    );
};

export default AllProducts;
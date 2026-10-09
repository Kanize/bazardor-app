import ProductCard from "@/components/HomePageItems/productCard";
import { Iproducts } from "@/components/Type/type";

const CategoryPage = async ({params}: {
    params: Promise<{ categoryId: string }>;
    }) => {
    "use cache";

    const { categoryId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`);
    const products: Iproducts[] = await res.json();

    // Get category information from the first product
    const category = products[0];

    if (!category) {
        return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold">কোনো পণ্য পাওয়া যায়নি</h1>
            <p className="mt-2 text-gray-500">এই ক্যাটাগরিতে এখন কোনো পণ্য নেই।</p>
        </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
        <div className="container mx-auto">
            {/* Category Header */}
            <div className="mb-8 flex items-center gap-5 rounded-3xl border border-[#dce6de] bg-[#fbfcfb] px-6 py-8 sm:px-10">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f1] text-5xl">
                {category.categoryIcon}
            </div>

            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                {category.categoryNameBn}
                </h1>

                <p className="mt-1 text-lg text-gray-500">
                {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                </p>
            </div>
            </div>

            {/* Product Count and Sorting */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg text-gray-600">
                মোট {products.length}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="flex items-center gap-3">
                <span className="text-gray-600">সাজান</span>

                <select
                defaultValue="default"
                className="rounded-xl border border-gray-300 bg-[#fbfcfb] px-4 py-3 text-gray-800 outline-none focus:border-green-600"
                >
                <option value="default">ডিফল্ট</option>
                <option value="price-low">দাম: কম থেকে বেশি</option>
                <option value="price-high">দাম: বেশি থেকে কম</option>
                <option value="change">দামের পরিবর্তন</option>
                </select>
            </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
        </main>
    );
};

export default CategoryPage;

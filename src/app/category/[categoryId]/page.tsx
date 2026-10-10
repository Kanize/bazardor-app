
import ProductCard from "@/components/HomePageItems/productCard";
import { Iproducts } from "@/components/Type/type";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type CategoryPageProps = {
  params: Promise<{ categoryId: string }>;
};

async function CategoryContent({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categoryId)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const products: Iproducts[] = await res.json();
  const category = products[0];

  if (!category) {
    notFound()
  }

  return (
    <>
      <div className="mb-8 flex items-center gap-5 rounded-3xl border border-[#dce6de] bg-[#fbfcfb] px-6 py-8 sm:px-10">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f1] text-5xl">
          {category.categoryIcon}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {category.categoryNameBn}
          </h2>
          <p className="mt-1 text-lg text-gray-500">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-lg text-gray-600">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center gap-3">
          <label htmlFor="product-sort" className="text-gray-600">
            সাজান
          </label>
          <select
            id="product-sort"
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

function CategorySkeleton() {
  return (
    <div
      aria-label="ক্যাটাগরির পণ্য লোড হচ্ছে"
      aria-busy="true"
      className="space-y-8"
    >
      <div className="flex animate-pulse items-center gap-5 rounded-3xl border border-[#dce6de] bg-[#fbfcfb] px-6 py-8 sm:px-10">
        <div className="h-20 w-20 shrink-0 rounded-2xl bg-gray-200" />
        <div className="flex-1 space-y-3">
          <div className="h-7 w-1/2 rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 6, 5, 4].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-2xl border border-[#dce6de] bg-[#fbfcfb] p-5"
          >
            <div className="mb-4 h-36 rounded-xl bg-gray-200" />
            <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="container mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          ক্যাটাগরির বাজারদর
        </h1>

        <Suspense fallback={<CategorySkeleton />}>
          <CategoryContent params={params} />
        </Suspense>
      </div>
    </main>
  );
}
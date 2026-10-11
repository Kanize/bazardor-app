"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/HomePageItems/productCard";
import { Iproducts } from "@/components/Type/type";

type ProductSortProps = {
  products: Iproducts[];
};

export default function ProductSort({ products }: ProductSortProps) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.today - b.today);
        break;

      case "price-high":
        result.sort((a, b) => b.today - a.today);
        break;

      case "change":
        result.sort(
          (a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct)
        );
        break;

      default:
        break;
    }

    return result;
  }, [products, sortBy]);

  return (
    <>
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
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
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
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
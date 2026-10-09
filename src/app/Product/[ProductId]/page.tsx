import { Iproducts } from "@/components/Type/type";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  "use cache";

  const { productId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`
  );

  if (!res.ok) notFound();

  const product: Iproducts = await res.json();

  const changeColor =
    product.change.dir === "up"
      ? "text-red-600"
      : product.change.dir === "down"
        ? "text-green-600"
        : "text-gray-600";

  const changeIcon =
    product.change.dir === "up"
      ? "▲"
      : product.change.dir === "down"
        ? "▼"
        : "—";

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#263329]">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-green-700"
          >
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="text-gray-700">{product.nameBn}</span>
        </div>

        {/* Product Summary */}
        <section className="mb-3 flex flex-col justify-between gap-5 rounded-xl border border-[#dfe8df] bg-[#fbfcfa] p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
              {product.image || product.categoryIcon}
            </div>

            <div>
              <h1 className="text-xl font-bold sm:text-2xl">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {product.categoryNameBn} · আজকের বাজারদর ও পরিবর্তন
              </p>
            </div>
          </div>

          <div className="min-w-28 rounded-xl bg-[#f0f5f0] px-5 py-3 text-center">
            <p className="text-xs text-gray-500">আজকের বাজার দর</p>
            <p className="text-2xl font-bold">৳{product.today}</p>
            <p className="text-xs text-gray-500">
              টাকা / {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
            <p className={`mt-1 text-xs font-semibold ${changeColor}`}>
              {changeIcon} {product.change.pct}%
            </p>
          </div>
        </section>

        {/* Price Summary */}
        <section className="mb-3 rounded-xl border border-[#dfe8df] bg-[#fbfcfa] p-4 sm:p-5">
          <h2 className="mb-4 font-bold">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e3ebe3] p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-lg font-bold text-green-700">
                ৳{Math.min(
                  product.today,
                  product.yesterday,
                  product.lastWeek,
                  product.lastMonth
                )}
              </p>
              <p className="text-xs text-gray-500">উপলব্ধ দামের মধ্যে</p>
            </div>

            <div className="rounded-xl border border-[#e3ebe3] p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-lg font-bold text-red-600">
                ৳{Math.max(
                  product.today,
                  product.yesterday,
                  product.lastWeek,
                  product.lastMonth
                )}
              </p>
              <p className="text-xs text-gray-500">উপলব্ধ দামের মধ্যে</p>
            </div>

            <div className="rounded-xl border border-[#e3ebe3] p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-lg font-bold text-green-700">
                ৳{Math.round(
                  (product.today +
                    product.yesterday +
                    product.lastWeek +
                    product.lastMonth) /
                    4
                )}
              </p>
              <p className="text-xs text-gray-500">চারটি সময়ের দামের গড়</p>
            </div>
          </div>

          {/* Price Comparison Table */}
          <h2 className="mb-3 mt-6 font-bold">
            বাজারভিত্তিক ক্যাটাগরির দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-y border-[#e3ebe3] text-xs text-gray-500">
                  <th className="px-3 py-3 font-medium">বাজার</th>
                  <th className="px-3 py-3 font-medium">বিভাগ</th>
                  <th className="px-3 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-3 py-3 text-right font-medium">
                    সর্বোচ্চ
                  </th>
                  <th className="px-3 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    name: "গত সপ্তাহ",
                    period: "সাপ্তাহিক",
                    low: product.lastWeek,
                    high: product.lastWeek,
                  },
                  {
                    name: "গত মাস",
                    period: "মাসিক",
                    low: product.lastMonth,
                    high: product.lastMonth,
                  },
                  {
                    name: "গতকাল",
                    period: "দৈনিক",
                    low: product.yesterday,
                    high: product.yesterday,
                  },
                  {
                    name: "আজকের বাজার",
                    period: "বর্তমান",
                    low: product.today,
                    high: product.today,
                  },
                ].map((item) => (
                  <tr
                    key={item.name}
                    className="border-b border-[#e3ebe3] even:bg-[#f0f5f0]"
                  >
                    <td className="px-3 py-3">{item.name}</td>
                    <td className="px-3 py-3">{item.period}</td>
                    <td className="px-3 py-3 text-right">
                      ৳{item.low}
                    </td>
                    <td className="px-3 py-3 text-right">
                      ৳{item.high}
                    </td>
                    <td className="px-3 py-3 text-right">
                      ৳{Math.round((item.low + item.high) / 2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailPage;
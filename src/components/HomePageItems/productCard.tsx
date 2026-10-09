import Link from "next/link";
import { Iproducts } from "../Type/type";

const ProductCard = ({ product }: { product: Iproducts }) => {
    return (
        <Link href={`/product/${product.id}`}> 
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            {/* Icon + Name */}
            <div className="mb-4 flex items-center gap-3  ">
            <span className="text-3xl bg-[#F0F5F0] p-2 rounded-xl">
                {product.image}
            </span>

            <div>
                <h2 className="font-semibold text-xl text-gray-800">
                {product.nameBn}
                </h2>

                <p className="text-m text-gray-500">প্রতি কেজি</p>
            </div>
            </div>

            {/* Price */}
            <div className="flex items-end justify-between">
            <div>
                <h2 className="text-lg text-gray-500">আজকের দাম</h2>
                <span className="text-2xl font-bold text-gray-900">
                {product.today}
                </span>

                <span className="ml-1 text-m text-gray-700">
                {product.unit === "kg" ? "টাকা" : product.unit}
                </span>
            </div>

            {/* Change */}
                <span
                    className={
                        product.change.dir === "up"
                        ? "font-sm text-red-600 bg-[#F0F5F0] p-2 rounded-3xl"
                        : product.change.dir === "down"
                        ? "font-sm text-green-600 bg-[#F0F5F0] p-2 rounded-3xl"
                        : "font-sm text-black bg-[#F0F5F0] p-2 rounded-3xl"
                    }
                    >
                    {product.change.dir === "up"
                        ? "▲"
                        : product.change.dir === "down"
                        ? "▼"
                        : "―"}{" "}
                    {product.change.pct}%
                </span>
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;

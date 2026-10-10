import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { Iproducts } from "../Type/type";

const Marquee = async () => {
    "use cache";

    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const headlines: Iproducts[] = await res.json();

const prices = headlines.filter(
  (headline) => ["down", "up"].includes(headline.change.dir)
);

    return (
        <div className="border-b border-gray-200">
        <MarqueeText
            duration={20}
            pauseOnHover={true}
            direction="right"
        >
            <div className="flex items-center">
            {prices.map((headline) => (
                <div
                key={headline.id}
                className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 py-3"
                >
                <span className="text-xl">
                    {headline.categoryIcon}
                </span>

                <span className="font-medium text-gray-800">
                    {headline.nameBn}
                </span>

                <span className="font-bold text-gray-900">
                    ৳{headline.today}
                </span>

                <span className="text-sm text-gray-500">
                    /{headline.unit === "kg" ? "কেজি" : headline.unit}
                </span>

                <span
                    className={
                        headline.change.dir === "up"
                        ? "font-semibold text-red-600"
                        : "font-semibold text-green-600"
                    }
                    >
                    {headline.change.dir === "up" ? "▲" : "▼"} {headline.change.pct}%
                    </span>
                </div>
            ))}
            </div>
        </MarqueeText>
        </div>
    );
};

export default Marquee;
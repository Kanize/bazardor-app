
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f0f5f1] px-4 py-12 text-gray-800">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white/80 p-8 text-center shadow-sm sm:p-12">
        {/* 404 Illustration */}
        <div className="mb-5 text-7xl" aria-hidden="true">
          🛒
        </div>

        <p className="mb-3 text-6xl font-extrabold tracking-tight text-green-700">
          404
        </p>

        <h1 className="text-2xl font-bold">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে,
          অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        {/* Navigation */}
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800"
          >
            ← হোম পেজে ফিরে যান
          </Link>


        </div>
      </div>
    </main>
  );
};

export default NotFound;

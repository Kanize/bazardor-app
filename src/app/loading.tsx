const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8">
      <div className="container mx-auto">
        {/* Page title skeleton */}
        <div className="mb-6 space-y-2">
          <div className="h-8 w-48 animate-pulse rounded-md bg-gray-300" />
          <div className="h-4 w-72 max-w-full animate-pulse rounded bg-gray-200" />
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border border-[#dfe8df] bg-white p-4"
            >
              {/* Product image */}
              <div className="mb-4 h-36 rounded-lg bg-gray-200" />

              {/* Product name */}
              <div className="mb-3 h-5 w-3/4 rounded bg-gray-300" />

              {/* Price */}
              <div className="mb-4 h-4 w-1/2 rounded bg-gray-200" />

              {/* Product details */}
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-2/3 rounded bg-gray-200" />
              </div>

              {/* Button */}
              <div className="mt-5 h-10 w-full rounded-lg bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
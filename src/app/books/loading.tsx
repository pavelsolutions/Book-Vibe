const Loading = () => {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-64 animate-pulse rounded bg-gray-100" />
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              {/* Image */}
              <div className="h-72 w-full animate-pulse bg-gray-200" />

              {/* Content */}
              <div className="space-y-4 p-5">

                {/* Tags */}
                <div className="flex gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-gray-100" />
                  <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100" />
                </div>

                {/* Title */}
                <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />

                {/* Author */}
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />

                {/* Review */}
                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-100" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-100" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Loading;
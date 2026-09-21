const Loading = () => {
  return (
    <main className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Book Image */}
          <div className="flex justify-center">
            <div className="h-[430px] w-[290px] animate-pulse rounded-xl bg-gray-200 shadow-sm" />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <div className="mb-5 h-7 w-24 animate-pulse rounded-full bg-gray-100" />

            {/* Title */}
            <div className="mb-3 h-10 w-4/5 animate-pulse rounded-lg bg-gray-200" />

            {/* Author */}
            <div className="mb-6 h-5 w-2/5 animate-pulse rounded bg-gray-100" />

            {/* Rating */}
            <div className="mb-7 h-7 w-32 animate-pulse rounded bg-gray-100" />

            {/* Review */}
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-3/5 animate-pulse rounded bg-gray-100" />
            </div>

            {/* Book Information */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-5 w-24 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-5 w-24 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-5 w-24 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-5 w-24 animate-pulse rounded bg-gray-200" />
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <div className="h-11 w-32 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-11 w-32 animate-pulse rounded-lg bg-gray-100" />
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default Loading;
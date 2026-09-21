const Loading = () => {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="rounded-xl bg-gray-100 py-5">
          <div className="mx-auto h-7 w-28 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Sort Button */}
        <div className="mt-5 flex justify-center">
          <div className="h-11 w-[185px] animate-pulse rounded-md bg-gray-200" />
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <div className="flex gap-2">

            <div className="h-11 w-28 animate-pulse rounded-t-md bg-gray-100" />

            <div className="h-11 w-36 animate-pulse rounded-t-md bg-gray-100" />

          </div>
        </div>

        {/* Book List */}
        <div className="mt-5 space-y-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row"
            >

              {/* Book Image */}
              <div className="h-48 w-full shrink-0 animate-pulse rounded-lg bg-gray-200 sm:h-40 sm:w-28" />

              {/* Book Content */}
              <div className="flex-1">

                {/* Title */}
                <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />

                {/* Author */}
                <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-gray-100" />

                {/* Tags */}
                <div className="mt-4 flex gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-gray-100" />
                  <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100" />
                </div>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  <div>
                    <div className="h-3 w-14 animate-pulse rounded bg-gray-100" />
                    <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div>
                    <div className="h-3 w-14 animate-pulse rounded bg-gray-100" />
                    <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div>
                    <div className="h-3 w-14 animate-pulse rounded bg-gray-100" />
                    <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div>
                    <div className="h-3 w-14 animate-pulse rounded bg-gray-100" />
                    <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>

                </div>

                {/* Button */}
                <div className="mt-5 h-9 w-28 animate-pulse rounded-md bg-gray-100" />

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Loading;
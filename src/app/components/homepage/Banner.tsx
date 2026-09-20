// import React from 'react';
// import bannerImg from "@/assets/banner.png";
// import Image from 'next/image';
// const Banner = () => {
//     return (
//         <div className="container mx-auto px-34 py-12 min-h-screen">
//             <div className="hero-content px-40 py-20 gap-21 flex-col lg:flex-row-reverse bg-[#f3f3f3] rounded-3xl">
//                 <Image src={bannerImg} alt="Banner Image" />
//                 <div>
//                     <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
//                     <button className="btn py-5 px-7 rounded-lg my-12 border-none bg-[#24be0f] text-xl font-bold text-white hover:bg-[#24be0f]">
//                         View The List
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from "react";
import Image from "next/image";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 overflow-hidden rounded-3xl bg-[#f3f3f3] px-6 py-10 shadow-sm sm:px-10 lg:flex-row lg:px-16 lg:py-16">
        
        {/* Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-[#24be0f]/10 px-4 py-2 text-sm font-semibold text-[#24be0f]">
            📚 Discover Your Next Read
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Books to{" "}
            <span className="text-[#24be0f]">
              freshen up
            </span>{" "}
            your bookshelf
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover amazing books, explore new stories, and find your next
            favorite read. Build a bookshelf that inspires you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="btn rounded-lg border-none bg-[#24be0f] px-7 py-6 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-[#24be0f] hover:shadow-lg hover:-translate-y-0.5">
              View The List →
            </button>

            <button className="btn rounded-lg border border-gray-300 bg-white px-7 py-6 text-base font-semibold text-gray-700 shadow-none transition-all duration-300 hover:bg-white hover:border-[#24be0f] hover:text-[#24be0f]">
              Explore Books
            </button>
          </div>

          {/* Small stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">1K+</h3>
              <p className="text-sm text-gray-500">Books</p>
            </div>

            <div className="h-10 w-px bg-gray-300"></div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-sm text-gray-500">Readers</p>
            </div>

            <div className="h-10 w-px bg-gray-300"></div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#24be0f]/20 blur-2xl"></div>
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#24be0f]/10 blur-3xl"></div>

          <Image
            src={bannerImg}
            alt="Books Banner"
            priority
            className="relative mx-auto w-full max-w-[520px] rounded-2xl object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
import React from "react";
import Image from "next/image";

import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="navbar mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl bg-white p-3 shadow-lg"
            >
              <li><a>Home</a></li>
              <li><a>Books</a></li>
              <li><a>Categories</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} alt="Book Vibe Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-900">
              Book Vibe
            </span>
          </a>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link href="/" className="rounded-full px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="rounded-full px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]">
                Books
              </Link>
            </li>

            <li>
              <Link href="/listed-books" className="rounded-full px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]">
                Listed Books
              </Link>
            </li>

            <li>
              <Link href={'/read-books'} className="rounded-full px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]">
                Pages to Read
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="navbar-end gap-3">

          <button className="hidden rounded-lg px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:block">
            Sign In
          </button>

          <button className="btn rounded-lg border-none bg-[#23BE0A] px-5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#20a80a] hover:shadow-lg">
            Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
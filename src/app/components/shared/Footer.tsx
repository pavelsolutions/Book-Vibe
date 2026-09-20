import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaBookOpen,
    FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-16 bg-[#111827] text-gray-300">

            {/* ================= MAIN FOOTER ================= */}
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* ================= BRAND ================= */}
                    <div className="lg:col-span-1">

                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                                {/* <FaBookOpen className="text-xl" /> */}
                                <Image src={logo} alt="Book Vibe Logo" className="h-10 w-10" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Book<span className="text-green-500"> Vibe</span>
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Read. Discover. Grow.
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                            Discover your next favorite book, keep track of your
                            reading journey, and build your personal library with
                            BookNest.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-green-600 hover:text-white"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-green-600 hover:text-white"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-green-600 hover:text-white"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-green-600 hover:text-white"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                    {/* ================= QUICK LINKS ================= */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-green-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books"
                                    className="transition hover:text-green-500"
                                >
                                    All Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/listed-books"
                                    className="transition hover:text-green-500"
                                >
                                    My Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-green-500"
                                >
                                    About Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* ================= RESOURCES ================= */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link
                                    href="/books"
                                    className="transition hover:text-green-500"
                                >
                                    Explore Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/listed-books"
                                    className="transition hover:text-green-500"
                                >
                                    Reading List
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-500"
                                >
                                    Help Center
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* ================= NEWSLETTER ================= */}
                    <div>

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Stay Updated
                        </h3>

                        <p className="mb-4 text-sm leading-6 text-gray-400">
                            Get book recommendations and reading updates
                            delivered to your inbox.
                        </p>

                        <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-800">

                            <input
                                type="email"
                                placeholder="Your email"
                                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                            />

                            <button
                                type="button"
                                aria-label="Subscribe"
                                className="flex w-12 items-center justify-center bg-green-600 text-white transition hover:bg-green-700"
                            >
                                <FaArrowRight />
                            </button>

                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                            We respect your privacy. No spam.
                        </p>

                    </div>
                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="border-t border-gray-800">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:px-6 md:flex-row lg:px-8">

                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Book Vibe. All rights reserved.
                    </p>

                    <div className="flex gap-5">

                        <Link
                            href="#"
                            className="text-gray-500 transition hover:text-green-500"
                        >
                            Terms
                        </Link>

                        <Link
                            href="#"
                            className="text-gray-500 transition hover:text-green-500"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="#"
                            className="text-gray-500 transition hover:text-green-500"
                        >
                            Contact
                        </Link>

                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
"use client";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/app/types/bookType";

import { useContext, useState } from "react";

import { FaBook, FaChevronDown } from "react-icons/fa";

import BookListItem from "../components/shared/BookListItem";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  // Sorting option
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // Dropdown open/close
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sort books
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  // Get books according to active tab
  const currentBooks: IBook[] =
    activeTab === "read" ? readBooks : wishlist;

  // Sort current books
  const sortedBooks = sortBooks(currentBooks);

  // Sort option label
  const sortLabel = {
    rating: "Rating",
    pages: "Number of pages",
    year: "Publisher year",
  };

  // Handle sort selection
  const handleSort = (value: "rating" | "pages" | "year") => {
    setSortBy(value);
    setIsSortOpen(false);
  };

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="rounded-xl bg-gray-100 py-5 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Books
          </h1>
        </div>

        {/* ================= SORT ================= */}
        <div className="mt-5 flex justify-center">
          <div className="relative w-[185px]">

            {/* Sort Button */}
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex h-[44px] w-full items-center justify-center gap-3 rounded-md bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <span>
                Sort By
              </span>

              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  isSortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isSortOpen && (
              <div className="absolute left-0 top-full z-50 w-full overflow-hidden rounded-b-md bg-white shadow-md">

                <button
                  onClick={() => handleSort("rating")}
                  className={`block w-full px-4 py-2 text-sm transition hover:bg-gray-100 ${
                    sortBy === "rating"
                      ? "font-medium text-gray-700"
                      : "text-gray-600"
                  }`}
                >
                  Rating
                </button>

                <button
                  onClick={() => handleSort("pages")}
                  className={`block w-full px-4 py-2 text-sm transition hover:bg-gray-100 ${
                    sortBy === "pages"
                      ? "font-medium text-gray-700"
                      : "text-gray-600"
                  }`}
                >
                  Number of pages
                </button>

                <button
                  onClick={() => handleSort("year")}
                  className={`block w-full px-4 py-2 text-sm transition hover:bg-gray-100 ${
                    sortBy === "year"
                      ? "font-medium text-gray-700"
                      : "text-gray-600"
                  }`}
                >
                  Publisher year
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= SELECTED SORT ================= */}
        <p className="mt-2 text-center text-xs text-gray-400">
          Sorted by: {sortLabel[sortBy]}
        </p>

        {/* ================= TABS ================= */}
        <div className="mt-8 border-b border-gray-200">
          <div className="flex">

            {/* Read Books */}
            <button
              onClick={() => setActiveTab("read")}
              className={`rounded-t-md border border-b-0 px-5 py-3 text-sm transition ${
                activeTab === "read"
                  ? "bg-white font-medium text-gray-800"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Read Books
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`rounded-t-md border border-b-0 px-5 py-3 text-sm transition ${
                activeTab === "wishlist"
                  ? "bg-white font-medium text-gray-800"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Wishlist Books
            </button>

          </div>
        </div>

        {/* ================= BOOK LIST ================= */}
        <div className="mt-5 space-y-4">

          {sortedBooks.length === 0 ? (

            /* Empty State */
            <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">

              <FaBook className="mx-auto text-4xl text-gray-300" />

              <h2 className="mt-4 text-lg font-semibold text-gray-700">
                {activeTab === "read"
                  ? "No read books yet"
                  : "Your wishlist is empty"}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Start adding books to see them here.
              </p>

            </div>

          ) : (

            /* Book List */
            sortedBooks.map((book) => (
              <BookListItem
                key={book.bookId}
                book={book}
              />
            ))

          )}

        </div>
      </div>
    </main>
  );
};

export default ListedBooks;
import React from 'react';
import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/bookType';

// const getBooks = async () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch books");
//   }

//   return response.json();
// };

const getBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return []
  }
}

const BooksPage = async () => {
  const books = await getBooks();
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            All Books
          </h2>
          <p className="mt-2 text-gray-500">
            Explore our collection of all books.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book: IBook, index: number) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksPage;
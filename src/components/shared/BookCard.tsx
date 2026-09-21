import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface IBookCardProps {
    book: IBook,
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <Link href={`/books/${book.bookId}`}>
            <div
                key={book.bookId}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                {/* Image Container */}
                <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={300}
                        className="h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {book.tags.slice(0, 2).map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h3 className="mt-5 line-clamp-1 font-serif text-2xl font-bold text-gray-900">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-3 text-sm text-gray-600">
                    By :{" "}
                    <span className="font-medium text-gray-800">
                        {book.author}
                    </span>
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-dashed border-gray-300" />

                {/* Bottom Info */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                        {book.category}
                    </span>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700">
                            {book.rating.toFixed(2)}
                        </span>

                        <FaStar
                            className="text-xl text-gray-500"
                            aria-label={`${book.rating} star rating`}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
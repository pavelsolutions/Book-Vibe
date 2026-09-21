import { IBook } from '@/types/bookType';
import Image from "next/image";
import Link from "next/link";
import {
    FaBookOpen,
    FaCalendarAlt,
    FaRegStar,
    FaUser,
} from "react-icons/fa";

interface BookListItemProps {
    book: IBook;
}

const BookListItem = ({ book }: BookListItemProps) => {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-3 transition hover:shadow-md sm:p-4">
            <div className="flex flex-col gap-4 sm:flex-row">

                {/* ================= IMAGE ================= */}
                <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-32 sm:w-36">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={300}
                        className="h-28 w-auto max-w-[110px] object-contain"
                    />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex min-w-0 flex-1 flex-col">

                    {/* Title */}
                    <h2 className="font-serif text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-sm text-gray-600">
                        By : {book.author}
                    </p>

                    {/* Tags + Year */}
                    <div className="mt-3 flex flex-wrap items-center gap-3">

                        <span className="text-sm font-semibold text-gray-800">
                            Tag
                        </span>

                        {book.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}

                        <span className="flex items-center gap-2 text-xs text-gray-500">
                            <FaCalendarAlt />
                            Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>

                    {/* Publisher + Pages */}
                    <div className="mt-3 flex flex-wrap items-center gap-5 text-xs text-gray-500">

                        <span className="flex items-center gap-2">
                            <FaUser />
                            Publisher: {book.publisher}
                        </span>

                        <span className="flex items-center gap-2">
                            <FaBookOpen />
                            Page {book.totalPages}
                        </span>

                    </div>

                    {/* Divider */}
                    <div className="my-3 border-t border-gray-200" />

                    {/* Bottom */}
                    <div className="flex flex-wrap items-center justify-between gap-3">

                        <div className="flex flex-wrap gap-2">

                            <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-500">
                                Category: {book.category}
                            </span>

                            <span className="rounded-full bg-orange-50 px-4 py-1.5 text-xs font-medium text-orange-500">
                                Rating: {book.rating}
                            </span>

                        </div>

                        <Link
                            href={`/books/${book.bookId}`}
                            className="rounded-full bg-green-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                        >
                            View Details
                        </Link>

                    </div>
                </div>
            </div>
        </article>
    );
};

export default BookListItem;
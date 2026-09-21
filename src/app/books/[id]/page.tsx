import { IBook } from '@/types/bookType';
import { FaBookOpen, FaCalendarAlt, FaBuilding, FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';


interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

// const getBooks = async (): Promise<IBook[]> => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
//     if (!response.ok) {
//         throw new Error("Failed to fetch books");
//     }
//     return response.json();
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


const BookDetailsPage = async ({
    params,
}: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => book.bookId === Number(id)
    );

    // If book doesn't exist
    if (!book) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Details Card */}
                <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm sm:p-8 lg:p-10">

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

                        {/* ================= IMAGE ================= */}
                        <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-gray-100 p-8">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                width={500}
                                height={300}
                                className="max-h-[470px] w-auto max-w-full object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* ================= CONTENT ================= */}
                        <div className="flex flex-col">

                            {/* Category */}
                            <div className="mb-4">
                                <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                                    {book.category}
                                </span>
                            </div>

                            {/* Book Name */}
                            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                                {book.bookName}
                            </h1>

                            {/* Author */}
                            <p className="mt-4 text-lg text-gray-500">
                                By :{" "}
                                <span className="font-medium text-gray-700">
                                    {book.author}
                                </span>
                            </p>

                            {/* Category */}
                            <div className="mt-6 flex items-center gap-3 border-y border-gray-200 py-4">
                                <FaBookOpen className="text-lg text-gray-500" />

                                <span className="text-base font-medium text-gray-700">
                                    {book.category}
                                </span>
                            </div>

                            {/* Review */}
                            <div className="mt-6">
                                <h2 className="text-lg font-bold text-gray-900">
                                    Review :
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-gray-500">
                                    {book.review}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                <span className="mr-2 text-sm font-bold text-gray-800">
                                    Tags
                                </span>

                                {book.tags.map((tag:string) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Information */}
                            <div className="mt-6 border-t border-gray-200 pt-5">

                                {/* Pages */}
                                <div className="flex items-center py-2.5">
                                    <FaBookOpen className="mr-4 w-5 text-gray-400" />

                                    <span className="w-44 text-sm text-gray-500">
                                        Number of Pages:
                                    </span>

                                    <span className="text-sm font-semibold text-gray-800">
                                        {book.totalPages}
                                    </span>
                                </div>

                                {/* Publisher */}
                                <div className="flex items-center py-2.5">
                                    <FaBuilding className="mr-4 w-5 text-gray-400" />

                                    <span className="w-44 text-sm text-gray-500">
                                        Publisher:
                                    </span>

                                    <span className="text-sm font-semibold text-gray-800">
                                        {book.publisher}
                                    </span>
                                </div>

                                {/* Year */}
                                <div className="flex items-center py-2.5">
                                    <FaCalendarAlt className="mr-4 w-5 text-gray-400" />

                                    <span className="w-44 text-sm text-gray-500">
                                        Year of Publishing:
                                    </span>

                                    <span className="text-sm font-semibold text-gray-800">
                                        {book.yearOfPublishing}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center py-2.5">
                                    <FaStar className="mr-4 w-5 text-gray-400" />

                                    <span className="w-44 text-sm text-gray-500">
                                        Rating:
                                    </span>

                                    <span className="text-sm font-semibold text-gray-800">
                                        {book.rating}
                                    </span>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex gap-3">
                                <ReadButton book={book} />
                                <WishlistButton book={book} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;
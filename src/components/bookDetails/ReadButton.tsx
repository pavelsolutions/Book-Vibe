'use client'
import { IBook } from '@/types/bookType';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext);

    // Check if the book is already read
    const alreadyRead = readBooks.some(
        (read) => read.bookId === book.bookId
    );


    // const handleReadButton = () => {
    //     // setReadBooks((prevReadBooks) => [...prevReadBooks, book])
    //     const availableReadBooks = readBooks.filter((read)=> read.bookId !== book.bookId);

    //     setReadBooks([...readBooks, book]);
    //     toast.success(`You have read "${book.bookName}"`);
    // }

    const handleReadButton = () => {
        // If already read, don't add again
        if (alreadyRead) {
            toast.info(`"${book.bookName}" is already in your read list.`);
            return;
        }

        // Add book to read list
        setReadBooks((prevReadBooks) => [
            ...prevReadBooks,
            book,
        ]);

        toast.success(`You have read "${book.bookName}"`);
    };
    return (
        // <button onClick={() => handleReadButton()} className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
        //     Read
        // </button>
        <button
            onClick={handleReadButton}
            disabled={alreadyRead}
            className={`rounded-md px-6 py-2.5 text-sm font-semibold transition ${alreadyRead
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
        >
            {alreadyRead ? "✓ Already Read" : "Read"}
        </button>
    );
};

export default ReadButton;
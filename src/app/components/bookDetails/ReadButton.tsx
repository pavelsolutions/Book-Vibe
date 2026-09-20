'use client'
import { IBook } from '@/app/types/bookType';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book} : {book: IBook}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadButton = () => {
        // setReadBooks((prevReadBooks) => [...prevReadBooks, book])
        setReadBooks([...readBooks, book]);
        toast.success(`You have read "${book.bookName}"`);
    }
    return (
        <button onClick={() => handleReadButton()} className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
            Read
        </button>
    );
};

export default ReadButton;
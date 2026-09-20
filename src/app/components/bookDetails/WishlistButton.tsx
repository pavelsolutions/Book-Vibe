'use client'
import { IBook } from '@/app/types/bookType';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }: { book: IBook }) => {
    const { wishlist, setWishlist } = useContext(BooksContext);

    const handleWishListButton = () => {
        setWishlist([...wishlist, book]);
        toast.success(`You have wishlist "${book.bookName}"`);
    }
    return (
        <button onClick={() => handleWishListButton()} className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
            Add to Wishlist
        </button>
    );
};

export default WishlistButton;
'use client'
import { IBook } from '@/types/bookType';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }: { book: IBook }) => {
    const { wishlist, setWishlist } = useContext(BooksContext);

    const alreadyWish = wishlist.some(
        (wish) => wish.bookId === book.bookId
    );


    // const handleWishListButton = () => {
    //     setWishlist([...wishlist, book]);
    //     toast.success(`You have wishlist "${book.bookName}"`);
    // }

    const handleWishListButton = () => {
        // If already read, don't add again
        if (alreadyWish) {
            toast.info(`"${book.bookName}" is already in your wish list.`);                    
            return;
        }

        // Add book to read list
        setWishlist((prevWishBooks) => [
            ...prevWishBooks,
            book,
        ]);

        toast.success(`You have added to Wishlist "${book.bookName}"`);
    };

    return (
        // <button onClick={() => handleWishListButton()} className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
        //     Add to Wishlist
        // </button>
        <button
            onClick={handleWishListButton}
            disabled={alreadyWish}
            className={`rounded-md px-6 py-2.5 text-sm font-semibold transition ${alreadyWish
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
        >
            {alreadyWish ? "✓ Already Added Wishlist" : " Add to Wishlist"}
        </button>
    );
};

export default WishlistButton;
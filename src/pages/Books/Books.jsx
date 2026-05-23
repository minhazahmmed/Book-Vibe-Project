import { Suspense, useEffect, useState } from "react";
import BookCard from "../Book/BookCard";

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-10">Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allBooks.map(book => (
                        <BookCard key={book.bookId} book={book} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Books;
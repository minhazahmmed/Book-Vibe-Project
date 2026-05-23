import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const BookListCard = ({ book }) => {
    const navigate = useNavigate();
    const { bookId, bookName, author, image, category, rating, tags, publisher, totalPages, yearOfPublishing } = book;

    return (
        <div className="flex gap-5 bg-white border border-gray-200 rounded-2xl p-4 items-center">
            <div className="w-28 h-36 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                <img src={image} alt={bookName} className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col gap-1 flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{bookName}</h3>
                <p className="text-gray-500 text-sm">By : {author}</p>

                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                    <span className="text-gray-600 font-medium">Tag</span>
                    {tags && tags.map((tag, i) => (
                        <span key={i} className="text-green-600 font-medium">#{tag}</span>
                    ))}
                    <span className="text-gray-400">|</span>
                    <span className="flex items-center gap-1 text-gray-500">
                        🕐 Year of Publishing: {yearOfPublishing}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">👤 Publisher: {publisher}</span>
                    <span className="flex items-center gap-1">📄 Page {totalPages}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="px-3 py-1 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">
                        Category: {category}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-orange-300 text-orange-500 text-xs font-medium">
                        Rating: {rating}
                    </span>
                    <button
                        onClick={() => navigate(`/bookDetails/${bookId}`)}
                        className="px-4 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-full hover:bg-green-700 transition-colors"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};


const Readlist = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => setAllBooks(data));

        const storedRead = localStorage.getItem("readList");
        const storedWish = localStorage.getItem("wishList");
        if (storedRead) setReadList(JSON.parse(storedRead));
        if (storedWish) setWishList(JSON.parse(storedWish));
    }, []);

    const sortBooks = (books) => {
        if (!sortOrder) return books;
        return [...books].sort((a, b) =>
            sortOrder === "desc" ? b.rating - a.rating : a.rating - b.rating
        );
    };

    const readBooks = sortBooks(allBooks.filter(book => readList.includes(book.bookId)));
    const wishBooks = sortBooks(allBooks.filter(book => wishList.includes(book.bookId)));

    const showToast = (message, icon = "success") => {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon,
            title: message,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    };

    const handleSort = (order) => {
        setSortOrder(order);
        setDropdownOpen(false);

        if (order === "desc") {
            showToast("Sorted: High → Low rating", "success");
        } else if (order === "asc") {
            showToast("Sorted: Low → High rating", "success");
        } else {
            showToast("Sort cleared", "info");
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="bg-gray-100 rounded-2xl py-6 text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Books</h2>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex justify-center mb-6 relative">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                    Sort By {sortOrder === "desc" ? "(High → Low)" : sortOrder === "asc" ? "(Low → High)" : ""} <span>▼</span>
                </button>

                {dropdownOpen && (
                    <div className="absolute top-10 z-10 bg-white border border-gray-200 rounded-xl shadow-lg w-52 overflow-hidden">
                        <button
                            onClick={() => handleSort("desc")}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${sortOrder === "desc" ? "text-green-600 font-semibold" : "text-gray-700"}`}
                        >
                            ⭐ Rating: High → Low
                        </button>
                        <button
                            onClick={() => handleSort("asc")}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${sortOrder === "asc" ? "text-green-600 font-semibold" : "text-gray-700"}`}
                        >
                            ⭐ Rating: Low → High
                        </button>
                        <button
                            onClick={() => handleSort(null)}
                            className="w-full text-left px-4 py-3 text-sm text-gray-400 hover:bg-gray-50 transition-colors"
                        >
                            ✕ Clear Sort
                        </button>
                    </div>
                )}
            </div>

            {/* Tabs */}
            <Tabs>
                <TabList className="flex border-b border-gray-200 mb-6">
                    <Tab
                        className="px-6 py-2 cursor-pointer font-medium text-sm text-gray-500 border-b-2 border-transparent focus:outline-none"
                        selectedClassName="text-gray-900 border-gray-900"
                    >
                        Read Books ({readList.length})
                    </Tab>
                    <Tab
                        className="px-6 py-2 cursor-pointer font-medium text-sm text-gray-500 border-b-2 border-transparent focus:outline-none"
                        selectedClassName="text-gray-900 border-gray-900"
                    >
                        Wishlist Books ({wishList.length})
                    </Tab>
                </TabList>

                <TabPanel>
                    {readBooks.length === 0 ? (
                        <p className="text-gray-500 text-center py-10">No books marked as read yet.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {readBooks.map(book => (
                                <BookListCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    )}
                </TabPanel>

                <TabPanel>
                    {wishBooks.length === 0 ? (
                        <p className="text-gray-500 text-center py-10">Your wishlist is empty.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {wishBooks.map(book => (
                                <BookListCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Readlist;
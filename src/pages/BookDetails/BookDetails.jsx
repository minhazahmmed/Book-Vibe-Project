import { useLoaderData, useParams } from "react-router";
import { addToStoreDB, addToWishlistDB } from "../../utility/addToDB";

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const { bookName, author, image, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = data.find(book => book.bookId === bookId);

 const handleMarkAsRead = (id) => {
    addToStoreDB(id);
};

const handleAddToWishlist = (id) => {
        addToWishlistDB(id);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

                {/* Left - Book Image */}
                <div className="md:w-2/5 flex items-center justify-center bg-gray-100 rounded-xl p-8 min-h-72">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-full max-h-96 object-contain"
                    />
                </div>

                {/* Right - Book Details */}
                <div className="md:w-3/5 flex flex-col gap-3">

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-900">{bookName}</h1>

                    {/* Author */}
                    <p className="text-gray-600 text-sm">By : {author}</p>

                    {/* Category */}
                    <p className="text-gray-700 text-sm font-medium border-t border-gray-200 pt-3">{category}</p>

                    {/* Review */}
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                        <span className="font-bold text-gray-900">Review : </span>
                        {review}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-2 flex-wrap border-t border-gray-200 pt-3">
                        <span className="text-gray-700 text-sm font-medium mr-2">Tag</span>
                        {tags && tags.map((tag, index) => (
                            <span key={index} className="text-green-600 text-sm font-medium border border-green-500 rounded-full px-3  bg-green-50">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-col gap-2 border-t border-gray-200 pt-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-44">Number of Pages:</span>
                            <span className="text-gray-900 font-semibold">{totalPages}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-44">Publisher:</span>
                            <span className="text-gray-900 font-semibold">{publisher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-44">Year of Publishing:</span>
                            <span className="text-gray-900 font-semibold">{yearOfPublishing}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-44">Rating:</span>
                            <span className="text-gray-900 font-semibold">{rating}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                        <button onClick={()=> handleMarkAsRead(bookId)} className="px-6 py-2 rounded-lg border border-gray-800 text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors">
                            Mark as Read
                        </button>
                        <button onClick={()=> handleAddToWishlist(bookId)} className="px-6 py-2 rounded-lg bg-cyan-400 text-white font-medium text-sm hover:bg-cyan-500 transition-colors">
                            Add to Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;
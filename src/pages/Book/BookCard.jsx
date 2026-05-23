import { Link } from "react-router";

const BookCard = ({ book }) => {
    const { bookName, author, image, category, rating, tags, yearOfPublishing, bookId } = book;

    return (
       <Link to={`/bookDetails/${bookId}`}>
        <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Image Container */}
            <div className="bg-gray-100 p-6 flex items-center justify-center h-64">
                <img
                    src={image}
                    alt={bookName}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                />
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags && tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-green-600 text-xs font-semibold border border-green-500 rounded-full px-3 py-1 bg-green-50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {bookName}
                    <div className="badge badge-secondary ml-3">
                        {yearOfPublishing}
                    </div>
                </h2>

                {/* Author */}
                <p className="text-gray-500 text-sm mb-4">
                    By : {author}
                </p>

                {/* Footer - Category & Rating */}
                <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-300 mt-auto">
                    <span className="text-gray-500 text-sm font-medium">
                        {category}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-800 font-semibold text-sm">
                            {rating.toFixed(2)}
                        </span>
                        <span className="text-yellow-400 text-lg">★</span>
                    </div>
                </div>
            </div>
        </div>
       
       </Link>
    );
};

export default BookCard;
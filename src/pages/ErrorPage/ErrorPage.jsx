import { useNavigate } from "react-router";
import { FaBookOpen, FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">

            {/* Big 404 */}
            <div className="relative mb-6">
                <h1 className="text-[10rem] font-extrabold text-gray-100 leading-none select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <FaBookOpen className="text-green-600 text-7xl opacity-90" />
                </div>
            </div>

            {/* Message */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
                Page Not Found
            </h2>
            <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
                Oops! Looks like this page got lost between the shelves. 
                The book you're looking for doesn't exist or may have been moved.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                    <FaArrowLeft /> Go Back
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors"
                >
                    <FaHome /> Back to Home
                </button>
            </div>

            {/* Bottom branding */}
            <p className="mt-12 text-gray-400 text-xs flex items-center gap-2">
                <FaBookOpen className="text-green-500" />
                Book Vibe — Your reading companion
            </p>
        </div>
    );
};

export default ErrorPage;
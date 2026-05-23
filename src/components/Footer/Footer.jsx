import { FaBookReader, FaHome, FaBookmark, FaInfoCircle, FaBook, FaMagic, FaSearch, FaLandmark, FaRocket, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="space-y-3">
                    <h2 className="text-white text-xl font-extrabold flex gap-3 items-center">
                        <FaBookReader /> Book Vibe
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your personal reading companion. Discover great books, track your reads, and plan your next adventure.
                    </p>
                    <div className="flex gap-3 pt-2">
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center text-sm transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center text-sm transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center text-sm transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Navigate */}
                <div className="space-y-3">
                    <h6 className="text-white font-bold text-sm uppercase tracking-widest">Navigate</h6>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaHome /> Home
                        </Link>
                        <Link to="/readlist" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaBookmark /> Read List
                        </Link>
                        <Link to="/about" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaInfoCircle /> About Us
                        </Link>
                    </div>
                </div>

                {/* Genres */}
                <div className="space-y-3">
                    <h6 className="text-white font-bold text-sm uppercase tracking-widest">Genres</h6>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="#" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaBook /> Fiction
                        </a>
                        <a href="#" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaMagic /> Fantasy
                        </a>
                        <a href="#" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaSearch /> Mystery
                        </a>
                        <a href="#" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaLandmark /> Classic
                        </a>
                        <a href="#" className="hover:text-green-400 transition-colors flex gap-2 items-center">
                            <FaRocket /> Sci-Fi
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                    <h6 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h6>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <p className="flex gap-2 items-center">
                            <FaEnvelope className="text-green-500 shrink-0" /> minhazahmmed231@gmail.com
                        </p>
                        <p className="flex gap-2 items-center">
                            <FaMapMarkerAlt className="text-green-500 shrink-0" /> Chittagong, Bangladesh
                        </p>
                        <p className="flex gap-2 items-center">
                            <FaPhone className="text-green-500 shrink-0" /> +880 1878-438206
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-5 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                    <p>© 2026 Book Vibe. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-green-400 transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
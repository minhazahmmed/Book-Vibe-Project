import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: "📚",
            title: "Vast Book Collection",
            desc: "Browse through hundreds of books across all genres — Fiction, Fantasy, Mystery, Classic, and more. New titles added regularly.",
        },
        {
            icon: "🔖",
            title: "Personal Read List",
            desc: "Mark books as Read and keep track of your reading journey. Your list is saved locally so it's always available.",
        },
        {
            icon: "❤️",
            title: "Wishlist Feature",
            desc: "Add books you want to read next to your Wishlist. Plan your future reads and never forget a great recommendation.",
        },
        {
            icon: "⭐",
            title: "Ratings & Reviews",
            desc: "Every book comes with honest community ratings and detailed reviews to help you pick your next great read.",
        },
        {
            icon: "🔍",
            title: "Smart Sorting",
            desc: "Sort your reading list by rating — highest to lowest or lowest to highest — to find the best books instantly.",
        },
        {
            icon: "📱",
            title: "Fully Responsive",
            desc: "Book Vibe works beautifully on all devices — desktop, tablet, and mobile. Read on the go, anytime.",
        },
    ];

    const stats = [
        { value: "200+", label: "Books Listed" },
        { value: "10+", label: "Genres" },
        { value: "5K+", label: "Happy Readers" },
        { value: "4.8★", label: "Avg Rating" },
    ];

    const team = [
        { name: "Awlad Hossain", role: "Founder & Developer", emoji: "👨‍💻" },
        { name: "Rina Akter", role: "Content Curator", emoji: "📖" },
        { name: "Rafi Islam", role: "UI/UX Designer", emoji: "🎨" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">

            {/* Hero Section */}
            <section className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl py-16 px-8">
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
                    About Us
                </span>
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Welcome to <span className="text-green-600">Book Vibe</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    Book Vibe is your personal reading companion — a place to discover great books,
                    track what you've read, and plan your next literary adventure.
                </p>
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-green-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm"
                    >
                        Explore Books
                    </button>
                    <button
                        onClick={() => navigate("/readlist")}
                        className="bg-white border border-gray-300 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm"
                    >
                        My Read List
                    </button>
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-3xl font-extrabold text-green-600">{stat.value}</p>
                        <p className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Mission */}
            <section className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2 text-6xl text-center bg-green-50 rounded-3xl py-16">
                    📖
                </div>
                <div className="md:w-1/2 space-y-4">
                    <span className="text-green-600 font-bold text-sm uppercase tracking-widest">Our Mission</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                        Helping readers find their next favourite book
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We believe every great book deserves to be discovered. Book Vibe was built
                        to make book discovery simple, personal, and enjoyable — whether you're
                        a casual reader or a lifelong bookworm.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our platform lets you explore curated collections, save your favourites,
                        and track every book you've read — all in one clean, simple interface.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section>
                <div className="text-center mb-10">
                    <span className="text-green-600 font-bold text-sm uppercase tracking-widest">What We Offer</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Everything a reader needs</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* CTA */}
            <section className="bg-gray-900 rounded-3xl py-14 px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white mb-3">
                    Ready to start your reading journey?
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Join thousands of readers on Book Vibe. Discover books, build your list, and never run out of great reads.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors text-sm"
                >
                    Browse All Books →
                </button>
            </section>

        </div>
    );
};

export default About;
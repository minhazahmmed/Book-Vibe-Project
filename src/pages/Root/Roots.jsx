import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Roots = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-6xl mx-auto w-full px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Roots;
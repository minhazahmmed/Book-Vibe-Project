import { Link, NavLink } from "react-router";
import { FaBookReader, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <NavLink
            to={'/'}
            className={({ isActive }) => `m-2 pb-1 block ${isActive ? "border-b-2 border-green-600 font-bold text-green-600" : "text-gray-600"}`}
        >
            <li>Home</li>
        </NavLink>
        <NavLink
            to={'/about'}
            className={({ isActive }) => `m-2 pb-1 block ${isActive ? "border-b-2 border-green-600 font-bold text-green-600" : "text-gray-600"}`}
        >
            <li>About</li>
        </NavLink>
        <NavLink
            to={'/readlist'}
            className={({ isActive }) => `m-2 pb-1 block ${isActive ? "border-b-2 border-green-600 font-bold text-green-600" : "text-gray-600"}`}
        >
            <li>Read List</li>
        </NavLink>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl font-extrabold text-green-600" to={'/'}>
                    <FaBookReader /> Book Vibe
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
    <a
        href="https://github.com/minhazahmmed"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-600 text-green-600 text-sm font-semibold hover:bg-green-600 hover:text-white transition-all duration-200"
    >
        <FaGithub className="text-base" /> Contribute
    </a>
</div>
        </div>
    );
};

export default Navbar;
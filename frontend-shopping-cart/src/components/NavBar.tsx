import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
            <div className="flex items-center shrink-0 text-white mr-6">
                <a className="font-semibold text-xl tracking-tight" href="#">CartApp</a>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
                id="navbarNav"
            >
                <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0">
                    <li className="nav-item">
                        <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white" to="/catalog">
                            Catalog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white" to="/cart">
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}
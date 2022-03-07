import React from 'react';
import { Link } from 'react-router-dom';


import Toggle from './ThemeToggle';

const Header = () => {
    return (
        <nav className="bg-slate-200 dark:bg-slate-800/50 fixed inset-x-0 shadow-xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div className="text-3xl my-auto text-slate-900 dark:text-white  font-medium "><Link to={'/'}>Product Redux</Link></div>
                    </div>
                    <div className="flex items-center m-3 space-x-2">
                        <Toggle />
                        <Link to="/products/new" className="py-3 px-2 w-32  font-extrabold text-lg text-center bg-yellow-500 text-white hover:bg-yellow-200  hover:text-yellow-900 rounded transition duration-300">
                            Add product
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
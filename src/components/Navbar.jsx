import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex center-between items-center space-x-1 w-screen ">
      <Link to="/">
        <p className="text-4xl bg-black-500 font-bold text-green py-1 px-2 dark:bg-white-50 dark:text-black-500">
          ∞
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:text-gray-500 px-1 py-1 hover:shadow-lg">{darkTheme ? '🌕 Light' : '🌑 Night'}</button>
    </div>
    <Search />
  </div>
);

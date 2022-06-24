import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
       <p><h1 style="color:#00FF99">hermes search</h1>🔎
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-20 dark:text-gray-900 bg-white border px-2 py-1 hover:shadow-lg">{darkTheme ? '🌕 Light' : '🌑 Night'}</button>
    </div>
    <Search />
  </div>
);

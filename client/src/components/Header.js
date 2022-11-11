import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='mb-2 py-4 px-6 lg:px-16 shadow sm:flex sm:justify-between bg-white'>
        <span className='text-sm text-black self-center'>
          <h1 className='text-4xl font-bold antialiased'>Tracker</h1>
        </span>
        <ul className='flex flex-wrap items-center text-sm text-black'>
          <li>
            <Link to='/'>
              <button
                type='button'
                className=' hover:text-black border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-00 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 '>
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none focus:ring-blue-800 text-center'>
              Sign Up
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

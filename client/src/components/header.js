import React from 'react';
import { Link } from 'react-router-dom';
function header() {
  return (
    <div className=''>
      <header className='py-4 px-6 lg:px-16 shadow sm:flex  sm:justify-between bg-white'>
        <span className='text-sm text-black self-center'>
          <h1 className='text-4xl font-bold antialiased'>Tracker</h1>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-black'>
          <li>
            <Link to='/'>
              <button
                type='button'
                className=' hover:text-black border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-00 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
              Sign Up
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default header;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Tracker, 2022
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link
              to='/about'
              className='mr-4 hover:underline md:mr-6 '>
              About
            </Link>
          </li>
          <li>
            <a
              href='https://github.com/dipanshu-m/tracker'
              className='mr-4 hover:underline md:mr-6'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </a>
          </li>
          <li>
            <a
              className='mr-4 hover:underline md:mr-6'
              href='mailto:d1p@duck.com'
              target='_blank'
              rel='noopener noreferrer'>
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

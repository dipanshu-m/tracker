import React from 'react';
function Footer() {
  return (
    <div>
      <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Tracker, 2022
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a
              href='asd'
              className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a
              href='sadj'
              className='mr-4 hover:underline md:mr-6'>
              GitHub
            </a>
          </li>
          <li>
            <a
              href='mailto:d1p@duck.com'
              target={'_blank'}
              rel='noreferrer'
              className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

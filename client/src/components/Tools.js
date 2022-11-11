import React from 'react';
import { Link } from 'react-router-dom';
const toolsMenu = [
  {
    id: '1',
    val: 'Attendace tracker',
    path: '/attendace',
  },
  {
    id: '2',
    val: 'Budget Tracker',
    path: '/budget',
  },
];

const toolsMapped = toolsMenu.map((item) => {
  return (
    <div
      className='mx-auto w-3/4 md:w-96 bg-gray-200 border rounded mb-2 cursor-pointer'
      key={item.id}>
      <Link to={item.path}>
        <h1 className='text-lg py-4 px-3 font-semibold'>{item.val}</h1>
      </Link>
    </div>
  );
});

function tools() {
  return (
    <>
      <div className='mt-5 mx-auto w-3/4 md:w-96'>
        <h1 className='text-3xl'>Tools</h1>
      </div>
      {toolsMapped}
    </>
  );
}

export default tools;

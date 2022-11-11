import React from 'react';

const tools = [
  {
    id: '1',
    val: 'Attendace tracker',
  },
  {
    id: '2',
    val: 'Budget Tracker',
  },
];

const toolsMapped = tools.map((item) => {
  return (
    <div
      className='mx-auto w-3/4 bg-gray-200 border rounded mb-2'
      key={item.id}>
      <h1 className='text-xl py-4 px-3'>{item.val}</h1>
    </div>
  );
});

const body = () => {
  return (
    <div className='grow bg-whitee'>
      <div className='mx-auto mt-10 w-3/4'>
        <h1 className='text-3xl'>Tools</h1>
      </div>
      {toolsMapped}
    </div>
  );
};

export default body;

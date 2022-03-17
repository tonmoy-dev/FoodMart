import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container py-2 flex justify-center'>
      <ul className='flex flex-row flex-wrap gap-2'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button className="bg-green-500 text-white border w-8 h-8 rounded-md text-sm md:text-base" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
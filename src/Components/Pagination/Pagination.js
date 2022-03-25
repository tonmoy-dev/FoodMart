import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container py-2 flex justify-center'>
      <ul className='flex flex-row flex-wrap gap-3'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button className="primary-bg-color text-white border transition hover:font-semibold hover:border-lime-700 hover:bg-white hover:text-lime-700 w-10 h-10 rounded-md text-sm md:text-base" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
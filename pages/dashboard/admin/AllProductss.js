import React, { useState } from "react";

function AllProductss({ products }) {

  const [allProducts, setAllProducts] = useState(products);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(data.acknowledged) {
        const newProducts = allProducts.filter(pd => pd._id != id)
        setAllProducts(newProducts)
    }
  };

  return (
    <div>
      <p>You clicked times</p>
      <div classNameName="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
      {
          allProducts.map(product => (
            <div key={product._id} className="group relative flex-col">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  src={`data:image/png;base64, ${product.productImage}`}
                  alt=""
                //   width={100
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.productCategory}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.productDetails}
                </p>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  DELETE
                </button>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 mx-20">
                  Update
                </button>
              </div>
            </div>
          </div>
          ))
      }
      </div>
      
    </div>
  );
}

export default AllProductss;

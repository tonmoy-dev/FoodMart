import React from "react";
import Product from "../../Products/Product/Product";

const BestSells = ({ products }) => {
  const allProducts = products.slice(9, 13);
  <style jsx>
    {`
      .dbs-style {
        background-color: red;
      }
    `}
  </style>;

  const handleAddWishlist = async (id) => {
    const Wishlistproduct = products.filter((product) => product._id === id);

    axios.post("/api/wishlists", { Wishlistproduct }).then((response) => {
      if (response.data.insertedId) {
        setControl(!control);
        swal("WOW!!!  product add successfully");
      } else {
        setControl(false);
      }
    });
  };


  const handleAddCompare = async (id) => {
    const compareProduct = products.filter((product) => product._id === id);
    console.log(compareProduct[0]);
    const { product_title, product_price, user_rating, produc_Details, product_stock, product_imageUrl } = compareProduct[0];

    axios.post("/api/compare", {
      product_title: product_title,
      product_price: product_price,
      user_rating: user_rating,
      product_stock: product_stock,
      product_imageUrl: product_imageUrl.thumbnail,
      produc_Details: produc_Details

    }).then((response) => {
      if (response.data.insertedId) {
        // setControl(!control);
        swal("WOW!!! Compare product add successfully");
      }
      // else {
      //     setControl(false);
      // }
    });
  };

  return (
    <div className="container mx-auto pt-10 px-4 md:px-0">
      <div className="flex justify-between pb-5">
        <div>
          <h1 className="text-3xl font-bold mb-4">Daily Best Sells</h1>
        </div>
        <div>
          <p className=" inline-block ">Featured</p>
          <p className=" inline-block px-2 ">Popular</p>
          <p className=" inline-block  ">New added</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div>
          <div
            style={{
              backgroundImage: `url('https://i.ibb.co/cc0jgvk/banner-4.png')`,
              height: "26rem",
            }}
            className="dbs-style rounded-lg border-1"
          >
            <div className="py-10 px-10 ">
              <p className="text-3xl font-semibold text-gray-700">
                Bring nature{" "}
                <span>
                  <br />
                </span>{" "}
                into your{" "}
                <span>
                  <br />
                </span>{" "}
                home
              </p>
            </div>
            <div className=" px-10  ">
              <button className="bg-green-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                See more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pr-2 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {
          allProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        }
        <div></div>
      </div>
    </div>
  );
};

export default BestSells;

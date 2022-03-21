import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { useRouter } from 'next/router';
import Product from "../../src/Components/Products/Product/Product";

const CategoryDetails = (filteredProducts) => {
    const router = useRouter();
    const categoryName = router.query.category_details;
    
    const products = filteredProducts.filteredProducts;
    return (
        <div>
            <style jsx>
        {`
                    .linear-bg{
                        background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) 0%, #1d1d1df0 95.04%);
                    }
                `}
      </style>
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
                            <span className="">{categoryName}</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <Link href="/">Home</Link>
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                      {categoryName}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
            <div className="col-span-2 md:col-span-3">
                <div className="p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center align-middle">
                    
                    {
                        (products.length === 0) && (
                            <div className="p-3">
                                <p className="text-xl">This category has no products</p>
                            </div>

                        )
                    }
                    {
                        (products.length !== 0) && (
                        products.map(product => (
                            <Product key={product._id} product={product}/>
                        ))
                        )
                    }
                    
                    
                    </div>
                        </div>
            
        </div>
    )
}

export default CategoryDetails;

export async function getStaticProps(context) {
    const categoryName = context.query.category_details;

    const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`)
    const products = await res.json();

    const filteredProducts = products.filter((product) => product.product_category == categoryName);
    
    return {
      props: {filteredProducts}
    }
  }
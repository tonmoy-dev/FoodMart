import Product from "../../src/Components/Products/Product/Product";

const CategoryDetails = (filteredProducts) => {
    const products = filteredProducts.filteredProducts;
    return (
        <div>
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

export async function getServerSideProps(context) {
    const categoryName = context.query.category_details;

    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json();

    const filteredProducts = products.filter((product) => product.product_category == categoryName);
    
    return {
      props: {filteredProducts}
    }
  }
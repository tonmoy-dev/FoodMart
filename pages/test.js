import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts, fetchCompareProducts, fetchWishlistProducts } from "../src/redux/slices/productSlice";

const Test = () => {
    const dispatch = useDispatch();
    const wish = useSelector((state) => state.products.wishlistProducts);
    const cart = useSelector((state) => state.products.cartProducts);
    const compare = useSelector((state) => state.products.compareProducts);
    const user = useSelector((state) => state.states.user);

    useEffect(() => {
        dispatch(fetchWishlistProducts(user));
        dispatch(fetchCompareProducts(user));
        dispatch(fetchCartProducts(user));
        
    }, [dispatch,user?.email]);
    return (
        <div>
            <h1>go there</h1>
            <p>lets begin</p>
            {user?.email}
            <p>{wish?.length} products</p>
            <p>{cart?.length} products</p>
            <p>{compare?.length} products</p>
        </div>
    )
}

export default Test;
import {useEffect, useCallback} from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";

import {fetchProducts} from "../../../../store/reducer/products/operations"
import {addToCart} from "../../../../store/reducer/cart/actions";
import {getItems, isLoading, isError} from "../../../../store/reducer/products/selectors";

const ProductContainer = ({children}) => {
    const products = useSelector(({products}) => products, shallowEqual);

    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchProducts());
    }, []);

    const toCart = useCallback((product) => dispatch(addToCart(product)), []);

    return (
        <>
        {children({...products, toCart})}
        </>
    )

}

export default ProductContainer;
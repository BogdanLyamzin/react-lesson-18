import {useState, useEffect} from "react";
import axios from "axios";

import ProductCard from "../ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchProducts = async() => {
            try{
                const url = `http://localhost:4000/products?_page=${page}&_limit=10`;
                const {data} = await axios.get(url);
                setLoading(false);
                setProducts([...products, ...data]);
            }
            catch(error){
                setError(error)
            }
        }
        if(loading){
            fetchProducts();
        }
        
    }, [loading]);

    if(loading) {
        return <p>...Loading</p>
    }

    if(error){
        return <p>...Something was wrong</p>
    }

    const loadMore = () => {
        setPage(2);
        setLoading(true);
    }

    const productElements = products.map(item => <ProductCard {...item} />)
    return (
        <>
        <div className={styles.list}>
            {productElements}
        </div>
        <button onClick={loadMore}>Load more</button>
        </>
    );
}
 
export default ProductList;
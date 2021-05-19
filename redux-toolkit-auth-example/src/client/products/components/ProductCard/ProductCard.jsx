import styles from "./ProductCard.module.scss";

const ProductCard = ({title, description, price, onAddToCart}) =>{
    return (
        <div className={styles.card}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.price}>Price: {price}</p>
            <p className={styles.description}>{description}</p>
            <button onClick={onAddToCart} className={styles.addBtn}>To cart</button>
        </div>
    )
}

export default ProductCard;
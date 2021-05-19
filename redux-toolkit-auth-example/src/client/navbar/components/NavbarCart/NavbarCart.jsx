import {useSelector, shallowEqual} from "react-redux";
import styles from "./NavbarCart.module.scss";

const NavbarCart = () => {
    const cart = useSelector(state => state.cart, shallowEqual);
    return (
        <div>
            Cart: {cart.length} товаров
        </div>
    );
};

export default NavbarCart;
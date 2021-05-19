import {NavLink} from "react-router-dom";

import styles from "./NavbarNav.module.scss";

const NavbarNav = () => {
    return (
        <ul className={styles.menu}>
            <li className={styles.item}>
                <NavLink to="/" className={styles.link}>
                    Products
                </NavLink>
                <NavLink to="/cart" className={styles.link}>
                    Cart
                </NavLink>
                <NavLink to="/contacts" className={styles.link}>
                    Contacts
                </NavLink>
            </li>
        </ul>
    );
};

export default NavbarNav;
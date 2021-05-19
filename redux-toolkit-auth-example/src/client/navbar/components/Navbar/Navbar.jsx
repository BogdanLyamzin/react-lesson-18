import {connect} from "react-redux";

import Logo from "../../../../shared/components/Logo";

import styles from "./Navbar.module.scss";
import NavbarNav from "../NavbarNav";
import NavbarCart from "../NavbarCart";

import {isLogin, getUser} from "../../../../store/reducer/auth/selectors"
import {logout} from "../../../../store/reducer/auth/operations"
import NavbarAuth from "../NavbarAuth";

const Navbar = ({isLogin, user, logout, cart}) => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.content}>
                    <NavbarCart  />
                    <NavbarNav />
                    <NavbarAuth user={user} isLogin={isLogin} logout={logout} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLogin: isLogin(state),
        user: getUser(state),
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
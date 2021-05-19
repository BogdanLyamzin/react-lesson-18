import {memo} from "react";
import {NavLink} from "react-router-dom";

const NavbarAuth = ({isLogin, user, logout}) => {
    const logOut = (e) => {
        e.preventDefault();
        logout();
    };
    
    if(isLogin){
        return (
            <div>
            {user.name} | <a href="#" onClick={logOut}>Logout</a>
            </div>
        )
    }
    return (
        <div>
        <NavLink to="/register">
            Register
        </NavLink>
        |
        <NavLink to="/login">
            Login
        </NavLink>
        </div>
    )
}

export default memo(NavbarAuth);
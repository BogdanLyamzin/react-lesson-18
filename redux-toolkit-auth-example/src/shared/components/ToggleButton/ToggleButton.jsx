import {useState} from "react";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({text})=> {

    const [isActive, setIsActive] = useState(false);

    const onToggle = () => {
        setIsActive(!isActive)
    }

    const className = isActive ? styles.btnActive : styles.btn;

    return <button className={className} onClick={onToggle}>{text}</button>

}

export default ToggleButton
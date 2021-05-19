import {useState} from "react";

import {initialState} from "./initialState";

const RegisterForm = () => {

    // const [formData, setFormData] = useState(initialState)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const handleChange = ({target}) => {
    //     const {name, value} = target;
    //     setFormData({...formData, [name]: value})
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setEmail("")
        setPassword("")
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} placeholder="Name" onChange={({target}) => setName(target.value)} />
            <input type="email" name="email" value={email} placeholder="Email" onChange={({target}) => setEmail(target.value)} />
            <input type="password" name="password" value={password} placeholder="Password" onChange={({target}) => setPassword(target.value)} />
            <button type="submit">Register</button>
        </form>
    )

}


export default RegisterForm;
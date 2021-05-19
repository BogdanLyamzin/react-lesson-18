
import useForm from "../../../../shared/hooks/useForm"

import {initialState} from "./initialState"
// import {loginRequest} from "../../../../store/reducer/auth/actions"
const LoginForm = ({onSubmit}) =>{
    const [data, , handleChange, handleSubmit] = useForm({initialState, onSubmit});

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="email" value={data.email} onChange={handleChange} />
            <input type="password" value={data.password} onChange={handleChange} />
            <button>Login</button>
        </form>
    )
}

export default LoginForm;
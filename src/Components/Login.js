import React,{useState} from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
              username: username,
              password: password,
              loggedIn: true,
            })
        );
    };

    return(
        <div className = "login">
            <form className = "login__form" onSubmit = {(e) => {handleSubmit(e)}}>
                <h1>Login Page</h1>
                <input type = "username" 
                  placeholder = "Enter Username" 
                  value = {username} onChange={(e) => {setUsername(e.target.value)}}/>

                <input type = "password" 
                  placeholder = "Enter Password"  
                  value = {password} onChange={(e) => {setPassword(e.target.value)}}/>

                <button type = "submit" className = "submit__btn" > Login </button> 
            </form>
        </div>
    )
}

export default Login;
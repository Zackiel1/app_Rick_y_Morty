import React, { useState } from "react";
import style from './Form.module.css'
import {validation} from "./validation";

function Form (props) {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (evento) => {
        setUserData({...userData, [evento.target.name]: evento.target.value})

        setErrors(
            validation({ ...userData, [evento.target.name]: evento.target.value })
          )  
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        props.login(userData);
    }

    return(
        <div className={style.contenedorForm}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.nombreRyM}></div>
            <h2>Inicia Seccion</h2>
            <div className={style.userYPass}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        placeholder='Email'/>
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder='password'/>
                </div>
            </div>
            <p className={style.warning}>{errors.username}</p>
            <p className={style.warning}>{errors.password}</p>
            <button>Login</button>
          </form>  
        </div>
    )
}

export default Form;
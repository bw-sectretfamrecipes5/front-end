import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup'


const initialState = {

    username:'',
    password:'',
    isFetching:false

}

const initialFormErrors = {


    username:'Username is required!',
    password:'Password is required!',

}

const loginSchema = yup.object().shape({

    username: yup
        .string()
        .min(3, 'Username must include at least 3 characters!')
        .required('Username is required!'),
    password: yup
        .string()
        .min(5, 'Password must include at least 5 characters!')
        .required('Password is required!')    

});

export const Login = (props)=>{

    const [login, setLogin] = useState(initialState);
    const [loginFormErrors, setLoginFormErrors] = useState(initialFormErrors)
    const [buttonEnabled, setButtonEnabled] = useState(false)


    useEffect(() => {


        loginSchema.isValid(login)
            .then(valid => {


                setButtonEnabled(valid)


            })



    }, [login])




    
    

    const handleChange = (e) => {

        e.persist()
        setLogin({...login, [e.target.name]:e.target.value})

        yup
            .reach(loginSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {

                setLoginFormErrors({...loginFormErrors, [e.target.name]:''})

            })
            .catch(err => {

                setLoginFormErrors({...loginFormErrors, [e.target.name]:err.errors[0]})

            })

    }

    
    const handleSubmit = (e) => {

        
        e.preventDefault();
        axios.post('', login)
            .then(res=> {

                console.log('Login data returning', res)
                props.history.push('/');

            })
            .catch(err=> {

                console.log('Login data failed to return', err)

            })

    }




    return (
        <div className='login'>

            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label>Username:</label><input placeholder='username' onChange={handleChange} type='text' name='username' value={login.username}></input>

                <label>Password:</label><input placeholder='password' onChange={handleChange} type='password' name='password' value={login.password}></input>

                <button disabled={!buttonEnabled} type='submit'>Login</button>
                <p>{loginFormErrors.username}</p>
                <p>{loginFormErrors.password}</p>
                {login.isFetching && 'Loading login page...'}

            </form>

            {/* <div>Don't have an account? <Link to=''>Click here</Link></div> */}
        </div>
    )
}


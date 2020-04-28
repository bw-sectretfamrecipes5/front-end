import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup'

const initialState = {

    username: '',
    password: '',
    email: '',
    isFetching: false

}
const initialFormErrors = {


    username:'Username is required!',
    password:'Password is required!',
    email:'Email is required!'

}

const registerSchema = yup.object().shape({

    username: yup
        .string()
        .min(3, 'Username must include at least 3 characters!')
        .required('Username is required!'),
    password: yup
        .string()
        .min(5, 'Password must include at least 5 characters!')
        .required('Password is required!') ,
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!')  

});

function Register(props) {

    const [register, setRegister] = useState(initialState)
    const [registerFormErrors, setRegisterFormErrors] = useState(initialFormErrors)
    const [buttonEnabled, setButtonEnabled] = useState(false)

    useEffect(() => {

        registerSchema.isValid(register)
            .then(valid => {

                setButtonEnabled(valid)

            })
            


    }, [register])

    const handleChange = (e) => {

        e.persist()
        setRegister({ ...register, [e.target.name]: e.target.value })

        yup
            .reach(registerSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {

                setRegisterFormErrors({...registerFormErrors, [e.target.name]:''})

            })
            .catch(err => {

                setRegisterFormErrors({...registerFormErrors, [e.target.name]: err.errors[0]})

            })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post('', register)
            .then(res => {

                props.history.push('/')
                console.log('Register data is returning', res)

            })
            .catch(err => {

                console.log('Register data is not returning', err)

            })

    }

    return (

        <div className='register'>

            <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    
                    <label>Username:</label><input placeholder='username' onChange={handleChange} type='text' name='username' value={register.username}></input>

                    <label>Password:</label><input placeholder='password' onChange={handleChange} type='password' name='password' value={register.password}></input>

                    <label>Email:</label><input placeholder='email' onChange={handleChange} type='text' name='email' value={register.email}></input>

                    <button disabled={!buttonEnabled} type='submit'>Register</button>

                    <p>{registerFormErrors.username}</p>
                    <p>{registerFormErrors.password}</p>
                    <p>{registerFormErrors.email}</p>
                

                    {register.isFetching && 'Loading register page...'}

                </form>

                {/* <div>Already have an account? <Link to=''>Login here</Link></div> */}

        </div>


    )



}
export default Register;
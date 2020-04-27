import React, { useState } from 'react';
import axios from 'axios';

const initialState = {

    username: '',
    password: '',
    email: '',
    isFetching: false

}

function Register(props) {

    const [register, setRegister] = useState(initialState)

    const handleChange = (e) => {

        setRegister({ ...register, [e.target.name]: e.target.value })

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
                    
                    <label>Username:</label><input placeholder='username' onChange={handleChange} type='text' name='username' value={login.username}></input>

                    <label>Password:</label><input placeholder='password' onChange={handleChange} type='password' name='password' value={login.password}></input>

                    <label>Email:</label><input placeholder='email' onChange={handleChange} type='text' name='email' value={login.email}></input>

                    <button type='submit'>Register</button>

                    {login.isFetching && 'Loading register page...'}

                </form>

                {/* <div>Already have an account? <Link to=''>Login here</Link></div> */}

        </div>


    )



}
export default Register;
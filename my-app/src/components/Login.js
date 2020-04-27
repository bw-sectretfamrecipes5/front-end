import React, { useState, useHistory } from 'react';
import axios from 'axios';



const initialState = {

    username:'',
    password:'',
    isFetching:false

}

export const Login = (props)=>{

    const [login, setLogin] = useState(initialState);
    const history = useHistory();

    const handleChange = (e) => {

        setLogin({...login, [e.target.name]:e.target.value})

    }

    
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('', login)
            .then(res=> {

                console.log('Login data returning', res)
                props.history.push('');

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

                <button type='submit'>Login</button>

                {login.isFetching && 'Loading login page...'}

            </form>

            {/* <div>Don't have an account? <Link to=''>Click here</Link></div> */}
        </div>
    )
}




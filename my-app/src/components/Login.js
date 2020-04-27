import React, { useState } from 'react';
import axios from 'axios';


const initialState = {

    username:'',
    password:'',
    isFetching:false

}

export const Login = ()=>{

    const [login, setLogin] = useState(initialState);

    const handleChange = (e) => {

        setLogin({...login, [e.target.name]:e.target.value})

    }

    /*kljewrlkjewlkjrlkewjlrjlwek*/
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('', login)
            .then(res=> {

                console.log('Login data returning', res)

            })
            .catch(err=> {

                console.log('Login data failed to return', err)

            })

    }




    return (
        <div></div>
    )
}


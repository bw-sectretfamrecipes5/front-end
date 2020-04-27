import React, { useState } from 'react';
import axios from 'axios';

const initialState = {

    name:'',
    username:'',
    password:'',
    email:'',
    isFetching:false

}

function Register(props) {

    const [register, setRegister] = useState(initialState)

    const handleChange = (e) => {

        setRegister({...register, [e.target.name]:e.target.value})

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post('', register)
            .then(res=> {

                props.history.push('/')
                console.log(res)

            })
            .catch(err=> {

                console.log(err)

            })

    }

    return(

        <div></div>


    )



}
export default Register;
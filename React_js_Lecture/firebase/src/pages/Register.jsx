import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Register Successfully.")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div>Register</div>
            <form onSubmit={registerUser}>
                <label htmlFor="">UserName</label>
                <input type="email" placeholder='Enter Username' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register
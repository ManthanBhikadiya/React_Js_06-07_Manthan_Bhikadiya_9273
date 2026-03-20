import React from "react";
import { useState } from "react";
import { auth, GoogleProvider } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successfull.");
        } catch (err) {
            alert(err.message);
        }
    };

    const googleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithPopup(auth, GoogleProvider);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <div>Login</div>
            <form onSubmit={loginUser}>
                <label htmlFor="">UserName</label>
                <input
                    type="email"
                    placeholder="Enter Username"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <button onClick={googleLogin}>Google Login</button>
            </form>
        </>
    );
};

export default Login;
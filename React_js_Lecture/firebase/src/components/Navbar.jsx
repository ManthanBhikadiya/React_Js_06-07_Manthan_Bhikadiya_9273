import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Navbar = () => {
    const authUser = auth.currentUser;

    console.log('authUser', authUser);

    const logout = async () => {
        await signOut(auth)
        alert("logout successfully.")
    }

    return (
        <>
            <div className="flex justify-around bg-blue-500 p-4 items-center">
                <div className="text-4xl font-black text-white">Navbar</div>
                <ul className="">
                    <li className="space-x-4 flex text-white">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Navbar;
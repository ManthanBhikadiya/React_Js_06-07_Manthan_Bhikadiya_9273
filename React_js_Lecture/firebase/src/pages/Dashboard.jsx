import React from 'react'
import { auth } from '../firebase/firebaseConfig'
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext } from 'react'

const Dashboard = () => {

    const user = useContext(AuthContext)

    return (
        <>
            <div>Dashboard</div>
            <div>{user ? `Welcome ${user.email}` : "Please Login"}</div>
        </>
    )
}

export default Dashboard
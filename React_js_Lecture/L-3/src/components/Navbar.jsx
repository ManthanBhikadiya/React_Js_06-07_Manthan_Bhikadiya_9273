import React from 'react'

const Navbar = ({props}) => {
  return (
 <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">MyApp</div>
        <div className="text-gray-300">{props}</div>
      </div>
    </nav>
 </>
  )
}

export default Navbar

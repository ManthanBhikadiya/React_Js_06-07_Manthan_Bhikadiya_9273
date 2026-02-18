import React from 'react'

const Form = ({ name }) => {
  return (
    <>
      <form className="bg-gray-700 p-4 rounded-lg hover:bg-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Us - {name}</h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="bg-blue-600 p-3 font-bold text-white rounded hover:bg-blue-800"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>


  )
}

export default Form

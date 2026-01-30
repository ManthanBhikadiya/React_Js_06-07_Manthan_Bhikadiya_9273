import React from 'react'

const Main = () => {
  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to MyApp</h1>
          <p className="text-muted">
            This is the main content area built using Bootstrap in React.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid rounded"
            alt="placeholder"
          />
        </div>
      </div>
    </main>
  )
}

export default Main

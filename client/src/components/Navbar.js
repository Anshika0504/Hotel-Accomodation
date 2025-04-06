import React from 'react'

function Navbar() {
  return (
  <>
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Hotels Search</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar

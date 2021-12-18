import { Link } from "react-router-dom";
import {  useAuth } from "../../contexts/AuthContext";
import './Navbar.css'
const Navbar = () => {
  const {currentUser} = useAuth();

  const userNavigation = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Create Portfolio</Link>
      </li>
      <li>
        <Link to="/profile" className="nav-link">Welcome, {currentUser?.email}</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="btn btn-warning">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/logout" className="btn btn-danger">Logout</Link>
      </li>
    </>)

  const guestNavigation = (
    <>
      <li className="nav-item">
        <Link to="/login" className="btn btn-warning">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="btn btn-danger">Register</Link>
      </li>
    </>
  )

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="logo-color.svg" alt="logo-color.svg"/>
            <span className="ps-3">Actors Hired</span>
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolios">Portfolios</Link>
              </li>
              {currentUser
                ? userNavigation
                : guestNavigation}
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar;
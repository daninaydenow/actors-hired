import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const { currentUser } = useAuth();

  const userNavigation = (
    <>
      <li>
        <Link to="/create">
          <i className="far fa-plus-square"></i>
          <span className="hide">Create</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="fas fa-user-circle"></i>
          <span className="hide">Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestNavigation = (
    <>
      <li>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i>
          <span className="hide">Login</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fas fa-user-plus"></i>
          <span className="hide">Register</span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="theater.svg" alt="theater.svg" />
          </div>
          <ul className="nav">
            <li>
              <Link to="/portfolios">
                <i className="far fa-images"></i>
                <span className="hide">Gallery</span>
              </Link>
            </li>
            {currentUser ? userNavigation : guestNavigation}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const { currentUser } = useAuth();

  const userNavigation = (
    <>
      <li>
        <Link to="/create">
          <i class="far fa-plus-square"></i>
          <span class="hide">Create</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i class="fas fa-user-circle"></i>
          <span class="hide">Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="hide">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestNavigation = (
    <>
      <li>
        <Link to="/login">
          <i class="fas fa-sign-in-alt"></i>
          <span class="hide">Login</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i class="fas fa-user-plus"></i>
          <span class="hide">Register</span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <img src="theater.svg" alt="theater.svg" />
          </div>
          <ul class="nav">
            <li>
              <Link to="/portfolios">
                <i class="far fa-images"></i>
                <span class="hide">Gallery</span>
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

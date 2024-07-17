import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"> <Link to="/"className="link-text">Booking-App</Link></span>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton"><Link to="/login">Register</Link></button>
            <button className="navButton"><Link to="/login">Login</Link></button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

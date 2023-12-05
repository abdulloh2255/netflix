import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogaut from "../hooks/useLogaut";
function Navbar() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogaut();
  return (
    <div className="navbar">
      <h1>Home</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <p>hello, {user.displayName}</p>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
}

export default Navbar;

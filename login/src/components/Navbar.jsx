import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar ">
      <div className="logo font-bold">Navbar</div>
      <div className="children">
        <ul className="children">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

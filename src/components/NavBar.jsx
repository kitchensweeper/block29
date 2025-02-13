import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/new-player">
          <button>Create New Player</button>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;

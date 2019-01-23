import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="https://books.google.com/">
        Google Books
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>

      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;

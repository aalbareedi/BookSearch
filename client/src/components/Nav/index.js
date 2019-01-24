import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="https://books.google.com/">
        <b>Google Books</b>
      </a>
      <a href="/search">Search</a>
      <a href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;

import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li>
            <a href="https://books.google.com/">Google Books</a>
          </li>
          <li>
            <a class="active" href="/search">
              Search
            </a>
          </li>
          <li>
            <a href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

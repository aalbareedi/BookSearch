import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <Search />;
            }}
          />
          <Route
            path="/saved"
            exact
            strict
            render={() => {
              return <Saved />;
            }}
          />

          <Route
            path="/search"
            exact
            strict
            render={() => {
              return <Search />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;

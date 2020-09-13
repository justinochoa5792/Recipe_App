import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import Recipes from "./component/Recipes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exactpath="/"
            component={(props) => <Home {...props} />}
          ></Route>
          <Route
            exact
            path="/recipes"
            component={(props) => <Recipes {...props} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

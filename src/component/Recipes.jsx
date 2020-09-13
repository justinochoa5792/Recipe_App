import React, { Component } from "react";
import Axios from "axios";
import "../App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Recipes extends Component {
  state = {
    userSearch: "",
    recipe: [],
  };

  handleSubmit(e) {
    e.preventDefault();
    Axios.get(
      `https://api.edamam.com/search?q=${this.state.userSearch}&app_id=c2f8a963&app_key=50a9c5d1f171508f80243bee7cd4734c`
    ).then((response) => {
      console.log(response);
      this.setState({ recipe: response.data.hits });
    });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState(
      {
        userSearch: e.target.value,
      },
      this.renderRecipes
    );
  }
  renderRecipes() {
    return this.state.recipe.map((eachRecipe) => {
      return (
        <ul>
          <img src={eachRecipe.recipe.image} alt={eachRecipe.recipe.label} />
          <li>{eachRecipe.recipe.label}</li>
          <li>{eachRecipe.recipe.calories}</li>
          <li>{eachRecipe.recipe.source}</li>
          <a href={eachRecipe.recipe.url}>{eachRecipe.recipe.url}</a>
        </ul>
      );
    });
  }
  render() {
    return (
      <div className="home">
        <Link to="/">Home</Link>

        <div className="App">
          <h2>Search for Recipes</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              placeholder="Find Recipe"
              onChange={(e) => this.handleChange(e)}
            />
            <Button color="success" size="sm">
              Go to Recipes
            </Button>{" "}
          </form>
          {this.renderRecipes()}
        </div>
      </div>
    );
  }
}

export default Recipes;

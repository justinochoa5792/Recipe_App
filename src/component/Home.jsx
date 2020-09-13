import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple app that helps you find various recipes from around
          the internet!
        </p>
        <hr className="my-2" />
        <p>Click Learn More to begin your search.</p>
        <p className="lead">
          <Link to="/recipes">Learn More</Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;

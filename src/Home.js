import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-class">
      <h3>
        <Link to="/students">Students</Link>
      </h3>
      <h3>
        <Link to="/campuses">Campuses</Link>
      </h3>
    </div>
  );
};

export default Home;

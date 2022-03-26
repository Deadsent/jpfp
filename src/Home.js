import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    return (
      <div className="home-class">
        <Link to="/students">Students</Link>
        <Link to="/campuses">Campuses</Link>
      </div>
    );
  }

export default Home;

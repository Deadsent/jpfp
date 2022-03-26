import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import {
  HashRouter as Router,
  Routes,
  Link,
  Route,
} from "react-router-dom";
import axios from "axios";

import Campus from "./Campus";
import Students from "./Students";
import Home from "./Home";
import Header from "./Header";

const root = document.querySelector("#root");

const App = () => {
  const [campuses, setCampuses] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchCampuses = async () => {
    const { data } = await axios.get("/api/campuses");
    console.log(data, "data log");
    setCampuses(data);
  };

  const fetchStudents = async () => {
    const { data } = await axios.get("/api/students");
    console.log(data, "data log");
    setStudents(data);
  };

  useEffect(() => {
    fetchCampuses();
    fetchStudents();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/campuses" element={<Campus campuses={campuses} setCampuses={setCampuses}/>} />
          <Route path="/students" element={<Students students={students} setStudents={setStudents}/>} />
        </Routes>
      </Router>
    </div>
  );
};

reactDOM.render(<App />, root);

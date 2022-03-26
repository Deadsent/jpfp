import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleCampus = ({ campus }) => {
  return (
    <div>
      {campus.name}
    </div>
  );
};

export default SingleCampus;

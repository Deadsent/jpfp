import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleCampusPage = ({ campuses }) => {
  const { id } = useParams();
  const campus = campuses.find((campus) => {
    return campus.id == id;
  });

  if (campus) {
    return (
      <div>
          <h1>Strixhaven Campus of {campus.name}</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default SingleCampusPage;

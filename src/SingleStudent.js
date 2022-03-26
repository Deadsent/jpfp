import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleStudent = ({student}) => {
    console.log(student, "single student log")
    return (
    <div>
        {student.nameLast}, {student.nameFirst}
    </div>
  );
};

export default SingleStudent;

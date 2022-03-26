import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleStudent = ({student}) => {
    return (
    <div>
        {student.nameLast}, {student.nameFirst}
    </div>
  );
};

export default SingleStudent;

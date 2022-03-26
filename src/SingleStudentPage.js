import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleStudentPage = ({ students }) => {
  const { id } = useParams();
  const student = students.find((student) => {
    return student.id == id;
  });

  if (student) {
    return (
      <div>
        <h1>Student File</h1>
        <p>Last Name: {student.nameLast}</p>
        <p>First Name: {student.nameFirst}</p>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default SingleStudentPage;

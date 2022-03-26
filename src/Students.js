import React from "react";
import axios from "axios";

const Students = ({ students, setStudents }) => {
  async function deleteStudents(id) {
    try {
      console.log(id, "id log");
      const { data } = await axios.delete(`/api/students/${id}`);
      console.log(data, "data log");
      setStudents(data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.nameLast}, {student.nameFirst}
              <button
                type="submit"
                onClick={() => {
                  event.preventDefault();
                  try {
                    deleteStudents(student.id);
                    location.reload();
                  } catch (error) {
                    throw error;
                  }
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Students;

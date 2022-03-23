import React from "react";
import axios from "axios";

class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get("/api/students");
    console.log(data, "componentDidMount Log");
    this.setState({ students: data });
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <ul>
          {students.map((student) => {
            return (
              <li key={student.id}>
                {student.nameLast},  {student.nameFirst}
                <button> Delete </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
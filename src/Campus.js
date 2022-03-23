import React from "react";
import axios from "axios";

class Campus extends React.Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
    };
  }

 async componentDidMount() {
    const { data } = await axios.get("/api/campuses");
    console.log(data, "componentDidMount Log");
    this.setState({ campuses: data });
 }

  render() {
    const {campuses} = this.state
    return (
      <div>
        <ul>
          {campuses.map((campus) => {
            return (
              <li key={campus.id}>
                {campus.name}
                <button> Delete </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
 }

export default Campus;

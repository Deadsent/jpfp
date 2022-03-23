import React from "react";
import reactDOM from "react-dom";
import axios from "axios";
import Campus from "./Campus"
import Students from "./Students";


const root = document.querySelector("#root");

class App extends React.Component {

  render() {
    return (
      <div>
          <Campus />
          <Students />
      </div>
    );
  }
}



reactDOM.render(<App />, root);

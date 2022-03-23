import React from "react";
import reactDOM from "react-dom";
import axios from "axios";
import Campus from "./Campus"

const root = document.querySelector("#root");

class App extends React.Component {

  render() {
    return (
      <div>
          <Campus />
      </div>
    );
  }
}



reactDOM.render(<App />, root);

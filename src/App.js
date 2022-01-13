import React, { Component } from "react";
import ButtonTwo from "./components/ButtonTwo";
import ButttonOne from "./components/ButttonOne";

export default class App extends Component {
  render() {
    return (
      <div>
        <center>
          <ButttonOne disable/> <br />
          <ButtonTwo disable/>
        </center>
      </div>
    );
  }
}

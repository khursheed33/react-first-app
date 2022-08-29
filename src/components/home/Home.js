import React, { Component } from "react";
import Authentication from "../Authentication/Authentication";
import Header from "../../core/components/Header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header> Welcome to First App </Header>
        <Authentication />
      </div>
    );
  }
}

export default Home;

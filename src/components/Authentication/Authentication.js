import React, { Component } from "react";
import Button from "../../core/components/Button/Button";

import Container from "../../core/components/Container/Container";

import InputField from "../../core/components/InputField/InputField";

class Authentication extends Component {
  formData = [
    {
      label: "email",
      id: "email",
    },
    {
      label: "password",
      id: "password",
    },
  ];

  state = 
    {
      email: "",
      password: "",
    }
  ;

  onChangeHandler = (event) => {
  if(event.target.id === 'email'){

    this.setState({ email: event.target.value });
  }else{

    this.setState({ password: event.target.value });
  }
  };

  render() {
    return (
      <Container>
        <form>
          {this.formData.map((input, index) => {
            return (
              <InputField
                key={index}
                label={input.label}
                id={input.id}
                onChange={this.onChangeHandler}
              />
            );
          })}<br/>
          <Button type="submit">Login</Button>
        </form>
        <hr />
        <h2>Email: {this.state.email}</h2>
        <h2>Pass: {this.state.password}</h2>
      </Container>
    );
  }
}

export default Authentication;

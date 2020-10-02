import React, { Component } from "react";
import axios from "axios";

export default class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      priority_number: "",
      email_submitted: "",
      total_users: "",
      ref_link: "",
      error_info: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
    var body = {
      email: this.state.value,
      api_key: "VYFOG6",
      //   referral_link: window.location.href,
      current_url: "http://localhost:3000/",
    };

    axios
      .post("https://www.getwaitlist.com/waitlist", body)
      .then((response) => {
        console.log(response);
        var registered_email = response["data"]["registered_email"];
        var current_priority = response["data"]["current_priority"];
        var total_waiters_currently =
          response["data"]["total_waiters_currently"];
        var referral_link = response["data"]["referral_link"];
        this.setState({
          email_submitted: registered_email,
          priority_number: current_priority,
          total_users: total_waiters_currently,
          ref_link: referral_link,
        });
      })
      .catch((error) => {
        this.setState({
          error_info:
            "Some error occured unfortunately. Check your value or let me know: bani (at) banisingh.io",
        });
        console.log(error.response);
      });
  }

  render() {
    return (
      <div>
        <label htmlFor="">Enter Email </label>
        <input type="text" onChange={this.handleChange} />
        <br />
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

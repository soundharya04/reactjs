import React, { Component } from "react";
import { addProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class AddProject extends Component {
  state = {
    name: "",
    desc: "",
    completed: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addProfile(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          Description:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.desc}
            name="desc"
          />
          IsCompleted?:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.completed}
            name="completed"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addProfile })(AddProject);

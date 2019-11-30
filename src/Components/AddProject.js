import React, { Component } from "react";
import { addProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class AddProject extends Component {
  state = {
    id: null,
    name: null,
    desc: null,
    completed: null
  };

  handleChange = e => {
    let id = Math.random() * 10;
    this.setState({
      id: id,
      [e.target.id]: e.target.value
    });
  };

  handlesubmit = e => {
    e.preventDefault();
    this.props.addProfile();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}></input>
          <label htmlFor="desc">Description</label>
          <input type="text" id="desc" onChange={this.handleChange}></input>
          <label htmlFor="completed">Completed</label>
          <input
            type="text"
            id="completed"
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect({ addProfile })(AddProject);

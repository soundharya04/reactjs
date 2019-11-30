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
<<<<<<< HEAD
          ></input>
          <label htmlFor="desc">Description</label>
=======
            name="name"
          />
          Description:
>>>>>>> 92b29da1dfd25d251c64b339a5294c378e0c40ed
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.desc}
<<<<<<< HEAD
          ></input>
          <label htmlFor="completed">Completed</label>
=======
            name="desc"
          />
          IsCompleted?:
>>>>>>> 92b29da1dfd25d251c64b339a5294c378e0c40ed
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.completed}
<<<<<<< HEAD
          ></input>
          <button>Submit</button>
=======
            name="completed"
          />
          <button type="submit">Submit</button>
>>>>>>> 92b29da1dfd25d251c64b339a5294c378e0c40ed
        </form>
      </div>
    );
  }
}

export default connect(null, { addProfile })(AddProject);

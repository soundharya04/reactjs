import React, { Component } from "react";
import { addProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class AddProject extends Component {
  state = {
    name: null,
    desc: null,
    completed: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handlesubmit = e => {
    e.preventDefault();
    this.props.addProfile(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            // value={this.state.name}
          ></input>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            onChange={this.handleChange}
            // value={this.state.desc}
          ></input>
          <label htmlFor="completed">Completed</label>
          <input
            type="text"
            id="completed"
            onChange={this.handleChange}
            // value={this.state.completed}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ownProps
  };
};
export default connect(mapStateToProps, { addProfile })(AddProject);

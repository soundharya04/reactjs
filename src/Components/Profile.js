import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getuserProfile,
  deleteProfile,
  editProfile
} from "../Actions/profileActions";

class Profile extends Component {
  state = {
    dispvalue: "hidden",
    profile: [{ id: "", name: "", desc: "", completed: "" }]
  };

  componentDidMount() {
    this.props.getuserProfile(this.props.match.params.prof_id);
    if (this.props.prof[0]) {
      this.setState({
        id: this.props.prof[0].id,
        name: this.props.prof[0].name,
        desc: this.props.prof[0].desc,
        completed: this.props.prof[0].completed
      });
    }
  }

  handleEdit = () => {
    this.setState({
      dispvalue: "visible"
    });
  };
  handleDelete = () => {
    this.props.deleteProfile(
      this.props.match.params.prof_id,
      this.props.history
    );
  };

  handleChange = e => {
    let id = this.props.match.params.prof_id;
    this.setState({
      ...this.state,
      profile: {
        id: id,
        ...this.state.profile,
        [e.target.id]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.profile);
    this.props.editProfile(this.state.profile, this.props.history);
    this.setState({
      ...this.state,
      dispvalue: "hidden"
    });
  };

  render() {
    const prof = this.props.prof[0];

    const profdisp = prof ? (
      <div className="container">
        {prof.id}
        <div>Name:{prof.name}</div>
        <div>Description:{prof.desc}</div>
        <div>Completed:{prof.completed}</div>
        <button onClick={this.handleEdit}>EditUser</button>
        <button onClick={this.handleDelete}>Delete user</button>
        <div style={{ visibility: this.state.dispvalue }}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={this.state.profile.name}
            ></input>
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              id="desc"
              onChange={this.handleChange}
              value={this.state.profile.desc}
            ></input>
            <label htmlFor="completed">Completed</label>
            <input
              type="text"
              id="completed"
              onChange={this.handleChange}
              value={this.state.profile.completed}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    ) : (
      <div>No projects</div>
    );

    return <div>{profdisp}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    prof: state.u_profile
  };
};

export default connect(mapStateToProps, {
  getuserProfile,
  deleteProfile,
  editProfile
})(Profile);

import React, { Component } from "react";
import { getallProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getallProfile();
    console.log("getprofile");
  }
  handleClick = e => {
    e.preventDefault();
    this.props.history.push("/AddProject");
  };

  render() {
    const profile = this.props.profile;
    const tblrow = profile.length
      ? profile.map(prof => {
          return (
            <tr key={prof.id}>
              <td>{prof.id}</td>
              <td>{prof.name}</td>
              <td>{prof.desc}</td>
              <td>{prof.completed}</td>
            </tr>
          );
        })
      : null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>IsCompleted</th>
            </tr>
          </thead>
          <tbody>{tblrow}</tbody>
        </table>

        <button onClick={this.handleClick}>AddProject</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(mapStateToProps, { getallProfile })(Home);

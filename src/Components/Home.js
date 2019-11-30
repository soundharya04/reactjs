import React, { Component } from "react";
import { getallProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getallProfile();
    console.log("getprofile");
  }
  handleClick = () => {
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
          <th>
            <td>Id</td>
            <td>Name</td>
            <td>Description</td>
            <td>IsCompleted</td>
          </th>
          <tbody>{tblrow}</tbody>
        </table>

        <button onClick={this.handleClick}>AddPoject</button>
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

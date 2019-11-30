import React, { Component } from "react";
import { getallProfile } from "../Actions/profileActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getallProfile();
    console.log("getprofile");
  }
  render() {
    const profile = this.props.profile;
    console.log(profile);
    return <div>Home</div>;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(mapStateToProps, { getallProfile })(Home);

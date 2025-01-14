import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpperContainer from "../../components/Profile/Commponents/UpperContainer/UpperContainer";
import LowerContainer from "../../components/Profile/Commponents/LowerContainer/LowerContainer";
import { isLoggedIn } from "../../utils/auth";
import "./Profile.css";

function ActivityBar() {
  return (
    <div className="DummyActivityBar">
      <h5 style={{ textAlign: "center", padding: "10px 4px" }}>
        Dummy ActivityBar
      </h5>
    </div>
  );
}
/**
 *
 * @param {*} props
 * @type {Function}
 * @returns {jsx} Profile componenet
 * <Profile/>
 */
function Profile(props) {
  if (!isLoggedIn()) {
    window.location = "/signin"
    return (<div></div>)

  }
  return (
    <div className="dummyParent">
      <Sidebar />
      <Navbar isLoggedIn={isLoggedIn()} />
      <div className="profile-user" data-test="Profile">
        <UpperContainer
          data-test="UpperContainer"
          userId={props.match.params.userId}
        />
        <LowerContainer
          data-test="LowerContainer"
          userId={props.match.params.userId}
        />
      </div>
      <ActivityBar />
    </div>
  );
}
export default Profile;

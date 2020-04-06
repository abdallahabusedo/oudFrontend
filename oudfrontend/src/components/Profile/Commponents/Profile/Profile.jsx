import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Home/Sidebar/Sidebar";
import Navbar from "../../../Home/Navbar/Navbar";
import UpperContainer from "../UpperContainer/UpperContainer";
import LowerContainer from "../LowerContainer/LowerContainer";

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

function Profile(props) {
  return (
    <div className="dummyParent">
      <Sidebar />
      <Navbar isLoggedIn={true} />
      <div className="profile-user" data-test="Profile">
        <UpperContainer
          data-test="UpperContainer"
          userId={props.match.params.userId}
        />
        {console.log(props)}
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
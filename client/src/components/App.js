import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Discoveries from "./discoveries/Discoveries";
import Directory from "./directory/Directory";
import myProfile from "./my_profile/My_profile";
import UpdatesContainer from "./updates/UpdatesContainer";
import ProfileContainer from "./profile/ProfileContainer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="app_container">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/discoveries" component={Discoveries} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/myProfile" component={myProfile} />
            <Route exact path="/updates" component={UpdatesContainer} />
            <Route exact path="/profile/:id" component={ProfileContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

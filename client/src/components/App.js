import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import DiscoveriesContainer from "./discoveries/DiscoveriesContainer";
import DirectoryContainer from "./directory/DirectoryContainer";
import MyProfileContainer from "./my_profile/MyProfileContainer";
import UpdatesContainer from "./updates/UpdatesContainer";
import ProfileContainer from "./profile/ProfileContainer";
import LoginContainer from "./login/LoginContainer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="app_container">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/discoveries" component={DiscoveriesContainer} />
            <Route exact path="/directory" component={DirectoryContainer} />
            <Route exact path="/myProfile" component={MyProfileContainer} />
            <Route exact path="/updates" component={UpdatesContainer} />
            <Route exact path="/profile/:id" component={ProfileContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

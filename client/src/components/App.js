import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import DiscoveriesContainer from "./discoveries/DiscoveriesContainer";
import DirectoryContainer from "./directory/DirectoryContainer";
import MyProfileContainer from "./my_profile/MyProfileContainer";
import UpdatesContainer from "./updates/UpdatesContainer";
import ProfileContainer from "./profile/ProfileContainer";
import AddUpdateContainer from "./updates/AddUpdateContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/discoveries" component={DiscoveriesContainer} />
          <Route exact path="/directory" component={DirectoryContainer} />
          <Route exact path="/myProfile" component={MyProfileContainer} />
          <Route exact path="/updates" component={UpdatesContainer} />
          <Route exact path="/profile/:id" component={ProfileContainer} />
          <Route exact path="/updates/new" component={AddUpdateContainer} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

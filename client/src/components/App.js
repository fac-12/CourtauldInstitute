import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Discoveries from "./discoveries/Discoveries";
import Directory from "./volunteer_directory/Directory";
import myProfile from "./my_profile/My_profile";
import Updates from "./updates/Updates";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/discoveries" component={Discoveries} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/myProfile" component={myProfile} />
            <Route exact path="/updates" component={Updates} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

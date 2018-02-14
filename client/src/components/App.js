import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Dashboard from "./dashboard/Dashboard";
import DiscoveriesContainer from "./discoveries/DiscoveriesContainer";
import DirectoryContainer from "./directory/DirectoryContainer";
import MyProfileContainer from "./my_profile/MyProfileContainer";
import UpdatesContainer from "./updates/UpdatesContainer";
import ProfileContainer from "./profile/ProfileContainer";
import AddUpdateContainer from "./updates/AddUpdateContainer";
import AddDiscoveryContainer from "./discoveries/AddDiscoveryContainer";
import AddNewUserContainer from "./add_new_user/AddNewUserContainer";
import LoginContainer from "./login/LoginContainer";
import Client from "./error_pages/Client";
import Server from "./error_pages/Server";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const loggedIn = this.props.auth;
    if (loggedIn === null) return <div />;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              loggedIn ? <Dashboard {...props} /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/login"
            render={props =>
              !loggedIn ? <LoginContainer {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/discoveries"
            render={props =>
              loggedIn ? (
                <DiscoveriesContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/directory"
            render={props =>
              loggedIn ? (
                <DirectoryContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/myProfile"
            render={props =>
              loggedIn ? (
                <MyProfileContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/profile/:id"
            render={props =>
              loggedIn ? (
                <ProfileContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/updates/new"
            render={props =>
              loggedIn ? (
                <AddUpdateContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/discoveries/new"
            render={props =>
              loggedIn ? (
                <AddDiscoveryContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/updates/:filter?"
            render={props =>
              loggedIn ? (
                <UpdatesContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/addNewUser"
            render={props =>
              loggedIn && this.props.auth.type === "staff" ? (
                <AddNewUserContainer {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/clientError" component={Client} />
          <Route exact path="/serverError" component={Server} />
          <Route path="/" component={Client} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);

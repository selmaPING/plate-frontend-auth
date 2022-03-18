import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRadnik from "./components/add-radnik.component";
import Radnik from "./components/radnik.component";
import RadniciList from "./components/radnik-list.component";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

    componentDidMount() {
      const user = AuthService.getCurrentUser();

      if (user) {
        this.setState({
          currentUser: user,
          showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      }

      EventBus.on("logout", () => {
        this.logOut();
      });
    }

    componentWillUnmount() {
      EventBus.remove("logout");
    }

    logOut() {
      AuthService.logout();
      this.setState({
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      });
    }

  render() {
  const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            Plate
          </Link>
          <div className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link to={"/radnici"} className="nav-link">
                          Radnici
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/add-radnik"} className="nav-link">
                          Dodaj radnika
                        </Link>
                      </li>            <li className="nav-item">
                                         <Link to={"/home"} className="nav-link">
                                           Home
                                         </Link>
                                       </li>

                                       {showModeratorBoard && (
                                         <li className="nav-item">
                                           <Link to={"/mod"} className="nav-link">
                                             Moderator Board
                                           </Link>
                                         </li>
                                       )}

                                       {showAdminBoard && (
                                         <li className="nav-item">
                                           <Link to={"/admin"} className="nav-link">
                                             Admin Board
                                           </Link>
                                         </li>
                                       )}

                                       {currentUser && (
                                         <li className="nav-item">
                                           <Link to={"/user"} className="nav-link">
                                             User
                                           </Link>
                                         </li>
                                       )}
                                     </div>

                                     {currentUser ? (
                                       <div className="navbar-nav ml-auto">
                                         <li className="nav-item">
                                           <Link to={"/profile"} className="nav-link">
                                             {currentUser.username}
                                           </Link>
                                         </li>
                                         <li className="nav-item">
                                           <a href="/login" className="nav-link" onClick={this.logOut}>
                                             LogOut
                                           </a>
                                         </li>
                                       </div>
                                     ) : (
                                       <div className="navbar-nav ml-auto">
                                         <li className="nav-item">
                                           <Link to={"/login"} className="nav-link">
                                             Login
                                           </Link>
                                         </li>

                                         <li className="nav-item">
                                           <Link to={"/register"} className="nav-link">
                                             Sign Up
                                           </Link>
                                         </li>
                                       </div>
                                     )}
                                   </nav>

        <div className="container mt-3">
          <Switch>
                 <Route exact path={["/", "/home"]} component={Home} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/profile" component={Profile} />
                      <Route path="/user" component={BoardUser} />
                      <Route path="/mod" component={BoardModerator} />
                      <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/radnici" component={RadniciList} />
            <Route exact path="/add-radnik" component={AddRadnik} />
            <Route path="/radnici/:id" component={Radnik} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

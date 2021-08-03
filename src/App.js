import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllCourses from "./components/views/AllCourses";
import EnrolledCourses from "./components/views/EnrolledCourses";
import MenuBar from "./components/MenuBar";
import LoginDialog from "./components/LoginDialog";

export default function App() {
  return (
    <Router>
      <div>
        <MenuBar />

        <hr />

        <Switch>
          <Route exact path="/">
            <AllCourses />
          </Route>
          <Route path="/enrolled_courses">
            <EnrolledCourses />
          </Route>
          <Route path="/login">
            <AllCourses />
          </Route>
          <Route path="/debug">
            <LoginDialog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

//  Bootstrap core CSS
import "./assets/css/bootstrap.min.css";

//  Magnificpopup Css
import "./assets/css/magnific-popup.css";

// Material Icon
import "./assets/css/materialdesignicons.min.css";

//  Font Awesome
// import "./assets/css/font-awesome.min.css";

// Custom  Css
import "./assets/css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);

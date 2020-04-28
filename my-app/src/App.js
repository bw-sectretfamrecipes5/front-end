import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import { Login } from "./components/Login";
import Register from "./components/Register";
import Recipe from "./components/Recipe";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  let history = useHistory();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register history={history} />
          </Route>
          <Route exact path="/" component={Login}>
            <Login history={history} />
          </Route>
        </Switch>
        <Switch>
          <PrivateRoute path="/recipe" component={Recipe}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

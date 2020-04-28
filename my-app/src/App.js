import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Recipe from "./components/Recipe";
import PrivateRoute from "./components/PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import { Login } from "./components/Login";
import Register from "./components/Register";

function App() {
  const [userId, setUserId] = useState("");
  let history = useHistory();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register history={history} />
          </Route>
          <Route exact path="/">
            <Login setUserId={setUserId} history={history} />
          </Route>

          <PrivateRoute path="/recipe" component={Recipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

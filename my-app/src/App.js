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
  <div>
        <Router>
        <Route exact path="/">
            <Login setUserId={setUserId} history={history} />
          </Route>
        <Route path="/register" component={Register} />
        <PrivateRoute path="/recipe" component={Recipe} />
        </Router>
        </div>
  );
}

export default App;

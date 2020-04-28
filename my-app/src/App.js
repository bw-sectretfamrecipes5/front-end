import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, useHistory, Switch } from "react-router-dom"
import { Login } from "./components/Login";
import Register from "./components/Register"




function App() {
  const [userId, setUserId] = useState("");
  let history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path='/register'>
          <Register history={history}/>
        </Route>
        <Route exact path='/' component={Login}>
          <Login history={history}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

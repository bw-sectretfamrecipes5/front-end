import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, useHistory } from "react-router-dom"
import { Login } from "./components/Login";
import Register from "./components/Register"




function App() {

  let history = useHistory();

  return (
    <div className="App">
      
      <Route path='/register'>
        <Register history={history}/>
      </Route>
      <Route path='/login'>
        <Login history={history}/>
      </Route>
      
    </div>
  );
}

export default App;

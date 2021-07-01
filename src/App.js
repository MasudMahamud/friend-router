import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

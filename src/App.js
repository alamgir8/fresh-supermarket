
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import SignUp from './Components/SignUp/SignUp';
import CheckOut from './Components/CheckOut/CheckOut';
import AllProduct from './Components/AllProduct/AllProduct';
import NoMatch from './Components/NoMatch/NoMatch';


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
              <Header/>
                <Switch>
                  <Route path='/home'>
                    <Home/>
                  </Route>
                  <Route path='/login'>
                    <Login/>
                  </Route>
                  <Route path='/signup'>
                    <SignUp/>
                  </Route>
                  <Route path='/products'>
                    <AllProduct/>
                  </Route>
                  <PrivateRoute path='/checkout/:_id'>
                    <CheckOut/>
                  </PrivateRoute>
                  <PrivateRoute path='/orders'>
                    <Orders/>
                  </PrivateRoute>
                  <PrivateRoute path='/admin'>
                    <Admin/>
                  </PrivateRoute>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
                  <Route path="*">
                      <NoMatch/>
                  </Route>
                </Switch>
            </Router>
      </userContext.Provider>
  );
}

export default App;

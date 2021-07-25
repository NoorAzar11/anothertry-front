import React, { Component } from 'react'
import Header from './componets/Header'
import Home from './componets/Home'
import FavPage from './componets/FavPage'
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
    render() {
        return (
            <>
<Header />
                <Router>
                    <Switch>
                        <Route exact path="/"> <Home />  </Route>
                        <Route exact path="/Fav"> <FavPage />   </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App

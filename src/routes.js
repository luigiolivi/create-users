import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min"

import Home from './containers/Home'
import Users from './containers/Users'

function myRoutes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  )
}

export default myRoutes
import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Car from './components/Car'

// Write component imports here //
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    )
}


// Start Router function here //
export default Router
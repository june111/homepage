import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './list'
import {
	view as Intro
} from './intro';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/intro' component={Intro}/>
    </Switch>
  </main>
)


// @flow
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import Edit from './components/Edit/Edit'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path='/edit/:id' component={Edit} />
  </Route>
)

import React, { Component } from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Body />
      </div>
    )
  }
}

export default App

import React from 'react'

import TopBar from './TopBar.jsx'
import Body from './Body.jsx'
import styles from '../css/app.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {test: 'foo'}
  }

  render () {
    return (
      <div className={styles.flexcontainer}>
        <TopBar />
        <Body />
      </div>
    )
  }
}

export default App

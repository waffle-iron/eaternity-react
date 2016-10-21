import React from 'react'
import styles from '../css/body.css'
import List from './List.jsx'

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {test: 'foo'}
  }

  render () {
    return (
      <div className={styles.flexcontainer}>
        <div >
          <h2>
            A list of github repos
          </h2>
          <List />
        </div>
      </div>
    )
  }
}

export default Body

import React from 'react'
import styles from '../css/topbar.css'

const eaternityLogo = require('../images/eaternity-logo.png')

// a stateless, functional component
const TopBar = () => {
  return (
    <span className={styles.flexcontainer}>
      <img className={styles.image} src={eaternityLogo} />
    </span>
  )
}

export default TopBar

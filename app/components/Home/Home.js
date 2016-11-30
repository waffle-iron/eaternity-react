/* @flow */
import React, { PropTypes } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavGroup from '../NavGroup/NavGroup'
import Table from '../Table/Table'
import styles from './Home.css'

const Home = (props: Object) => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <NavGroup />
      <Table
        actions={props.actions}
        products={props.products}
       />
    </div>
  )
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Home

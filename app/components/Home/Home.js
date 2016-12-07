/* @flow */
import React, { PropTypes } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavGroup from '../NavGroup/NavGroup'
import ProductTable from '../ProductTable/ProductTable'
import FaoTable from '../FaoTable/FaoTable'
import NutrientTable from '../NutrientTable/NutrientTable'
import styles from './Home.css'

const Home = (props: Object) => {
  const renderTable = (table) => {
    switch (table) {
      case 'products':
        return <ProductTable
          actions={props.actions}
          products={props.products}
          searchInput={props.searchInput} />

      case 'fao':
        return <FaoTable
          faos={props.faos}
          searchInput={props.searchInput} />

      case 'nutrition':
        return <NutrientTable
          nutrients={props.nutrients}
          searchInput={props.searchInput} />

      default:
        return <h1>Default case should not exist! Check Home.js</h1>
    }
  }

  return (
    <div className={styles.container}>
      <SearchBar
        actions={props.actions} />
      <NavGroup
        actions={props.actions} />
      {renderTable(props.visibleTable)}
    </div>
  )
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  faos: PropTypes.array.isRequired,
  nutrients: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibleTable: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired
}

export default Home

// @flow
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import NavGroup from './NavGroup';
import Table from './Table';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SearchBar />
        <NavGroup />
        <Table />
      </div>
    );
  }
}

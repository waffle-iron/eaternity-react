import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { ipcRenderer } from 'electron'
import productApi from '../api/products'
import styles from './ChooseDataDir.css'

class ChooseDataDir extends Component {
  state = {
    btnText: 'Choose data dir'
  }

  loadProductData = async () => {
    this.setState({
      products: await productApi.getAllProducts()
    })
  }

  handleClick = () => {
    ipcRenderer.send('choose-data-dir')
    ipcRenderer.on('data-dir-choosen', this.loadProductData)
  }

  render () {
    return (
      <div className={styles.chooseBtn}>
        <Button
          onClick={() => this.handleClick()}
          color='secondary'
          size='lg'
        >
          {this.state.btnText}
        </Button>
      </div>
    )
  }
}

export default ChooseDataDir

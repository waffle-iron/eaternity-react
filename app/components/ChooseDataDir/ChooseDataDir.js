/* @flow */
import React from 'react'
import { Button } from 'reactstrap'
import { ipcRenderer } from 'electron'
import styles from './ChooseDataDir.css'

const ChooseDataDir = (props: Object) => {
  const handleChooseDir = () => {
    ipcRenderer.send('choose-data-dir')
    ipcRenderer.on('data-dir-choosen', (event, dataDir) => {
      props.actions.changeDataDir(dataDir[0])
      props.actions.fetchProducts()
    })
  }

  return (
    <div className={styles.chooseBtn}>
      <Button
        onClick={() => handleChooseDir()}
        color='secondary'
        size='lg' >
        Choose data directory
      </Button>
    </div>
  )
}

export default ChooseDataDir

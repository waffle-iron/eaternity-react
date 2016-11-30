/* @flow */
import React, { PropTypes } from 'react'
import { Table } from 'reactable'
import { Col, Container, Row } from 'reactstrap'
import ChooseDataDir from '../ChooseDataDir/ChooseDataDir'
import styles from './Table.css'

const EdbTable = (props: Object) => {
  const renderView = () => {
    if (props.products.length === 0) {
      return <ChooseDataDir actions={props.actions} />
    }

    return (
      <Table
        className='table'
        data={props.products}
        itemsPerPage={8}
        pageButtonLimit={5}
        filterable={['Product']}
      />
    )
  }

  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col sm={{ size: '10', offset: 1 }}>
            {renderView()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

EdbTable.propTypes = {
  products: PropTypes.array,
  actions: PropTypes.object.isRequired
}

export default EdbTable

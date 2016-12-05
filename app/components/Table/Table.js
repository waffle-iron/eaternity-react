/* @flow */
import React, { PropTypes } from 'react'
import { clipboard } from 'electron'
import { Table, Tr, Td } from 'reactable'
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap'
import ChooseDataDir from '../ChooseDataDir/ChooseDataDir'
import styles from './Table.css'

const EdbTable = (props: Object) => {
  const handleEditClick = (id) => {
    props.actions.selectProduct(id)
    props.actions.changeLocation(`/edit/${id}`)
  }

  const handleCopyClick = (id) => {
    clipboard.writeText(id.toString())
  }

  const renderTableRows = () => {
    return (
      props.products.map(product => {
        return (
          <Tr key={product.Id} >
            <Td column='Product' data={product.Product} />
            <Td column='Tags' data={product.Tags} />
            <Td column='Co2-value' data={product['Co2-value']} />
            <Td column='Actions'>
              <ButtonGroup>
                <Button
                  outline
                  color='info'
                  size='sm'
                  onClick={() => handleCopyClick(product.Id)} >
                  Copy link
                </Button>
                <Button
                  outline
                  color='info'
                  size='sm'
                  onClick={() => handleEditClick(product.Id)} >
                  Edit
                </Button>
              </ButtonGroup>
            </Td>
          </Tr>
        )
      })
    )
  }

  const renderView = () => {
    if (props.products.length === 0) {
      return <ChooseDataDir actions={props.actions} />
    }

    return (
      <Table
        className='table'
        columns={['Product', 'Tags', 'Co2-value', 'Actions']}
        itemsPerPage={8}
        pageButtonLimit={5}
        filterable={['Product', 'Tags', 'Co2-value']}
        sortable={['Product', 'Tags', 'Co2-value']}
        filterBy={props.searchInput}
        hideFilterInput >
        {renderTableRows()}
      </Table>
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
  actions: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired
}

export default EdbTable

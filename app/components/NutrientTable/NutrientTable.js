/* @flow */
import React, { PropTypes } from 'react'
import { clipboard } from 'electron'
import { Table, Tr, Td } from 'reactable'
import { Button, Col, Container, Row } from 'reactstrap'

const NutrientTable = (props: Object) => {
  const handleCopyClick = (id) => {
    clipboard.writeText(id.toString())
  }

  const renderTableRows = () => {
    return (
      props.nutrients.map(nutrient => {
        return (
          <Tr key={nutrient.id} >
            <Td column='Id' data={nutrient.id} />
            <Td column='Name' data={nutrient.name} />
            <Td column='Country' data={nutrient.country} />
            <Td column='Actions'>
              <Button
                outline
                color='info'
                size='sm'
                onClick={() => handleCopyClick(nutrient.id)} >
                Copy ID
              </Button>
            </Td>
          </Tr>
        )
      })
    )
  }

  const renderView = () => {
    if (props.nutrients.length === 0) {
      return (
        <div className='table-message'>
          <h3>Nothing here yet...</h3>
          <p>Choose data dir above!</p>
        </div>
      )
    }

    return (
      <Table
        className='table'
        columns={['Id', 'Name', 'Country', 'Actions']}
        itemsPerPage={8}
        pageButtonLimit={5}
        filterable={['Id', 'Name', 'Country']}
        sortable={['Id', 'Name', 'Country']}
        filterBy={props.searchInput}
        hideFilterInput >
        {renderTableRows()}
      </Table>
    )
  }

  return (
    <div className='table-container'>
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

NutrientTable.propTypes = {
  nutrients: PropTypes.array,
  searchInput: PropTypes.string.isRequired
}

export default NutrientTable

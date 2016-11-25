import React, { Component } from 'react';
import { Table } from 'reactable';
import { Col, Container, Row } from 'reactstrap';
import productApi from '../api/products';
import styles from './Table.css';

class EdbTable extends Component {
  state = {
    data: productApi.loadProducs()
      .map(rawProduct => ({
        Product: rawProduct.name,
        Tags: rawProduct.tags,
        'Co2-value': rawProduct['co2-value']
      }))
  }

  render() {
    return (
      <div className={styles.table}>
        <Container>
          <Row>
            <Col sm={{ size: '10', offset: 1 }}>
              <Table
                className="table"
                data={this.state.data}
                itemsPerPage={10}
                pageButtonLimit={5}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EdbTable;

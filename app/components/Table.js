import React, { PropTypes } from 'react';
import { Table } from 'reactable';
import { Col, Container, Row } from 'reactstrap';
import ChooseDataDir from './ChooseDataDir';
import styles from './Table.css';

const EdbTable = (props) => {
  const renderView = () => {
    if (!props.products) {
      return <ChooseDataDir />;
    }

    return (
      <Table
        className="table"
        data={props.products}
        itemsPerPage={10}
        pageButtonLimit={5}
      />
    );
  };

  return (
    <div className={styles.table}>
      <Container>
        <Row>
          <Col sm={{ size: '10', offset: 1 }}>
            {renderView()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};


EdbTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default EdbTable;

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import styles from './NavGroup.css';

const NavGroup = () => (
  <div className={styles.container}>
    <ButtonGroup>
      <Button outline color="info" size="sm">Products</Button>{' '}
      <Button outline color="info" size="sm">FAO</Button>{' '}
      <Button outline color="info" size="sm">Nutrition</Button>
    </ButtonGroup>
  </div>
);

export default NavGroup;

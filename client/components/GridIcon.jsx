import React from 'react';
import styles from './styles'

const GridIcon = (props) => (
  <div className="grid-char">
    <img src="avengersIcon.jpg" alt="thubnail" />
    <div>{props.superHero.name}</div>
  </div>
);

export default GridIcon;

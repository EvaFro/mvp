import React from 'react';
import SuperHeroProfile from './SuperHeroProfile.jsx';
import GridIcon from './GridIcon.jsx'
import styles from './styles.css'
// display the Character profile below the grid

const CharacterList = (props) => (
  <div className ="char-list">
    {props.superHeroList.map(superHero => <GridIcon />)}
  </div>
  
);

export default CharacterList;
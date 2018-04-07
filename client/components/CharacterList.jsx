import React from 'react';
import SuperHeroProfile from './SuperHeroProfile';
import GridIcon from './GridIcon'
import styles from './styles'
// display the Character profile below the grid

const CharacterList = (props) => (
  <div className ="char-list">
    {props.superHeroList.map(superHero => <GridIcon superHero={superHero}/>)}
  </div>
  
);

export default CharacterList;
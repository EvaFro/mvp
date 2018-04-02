import React from 'react';
import SuperHeroProfile from './SuperHeroProfile';
import GridIcon from './GridIcon'

// display the Character profile below the grid

const CharacterList = (props) => (
  <div>
    {props.list.map(icon => <GridIcon icon={icon} onClick={props.displaySuperHero}/>)}
  </div>
);

export default CharacterList;
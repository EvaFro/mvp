import React from 'react';
import SuperHeroProfile from './SuperHeroProfile';
import GridIcon from './GridIcon'

// display the Character profile below the grid

const CharacterList = (props) => (
  <div>
    {props.list.map(icon => <GridIcon icon={props.icon} onClick={props.displaySuperHero}/>)}
    <SuperHeroProfile />
  </div>
  
);

export default CharacterList;
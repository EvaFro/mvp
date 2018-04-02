import React from 'react';
import SuperHeroProfile from './SuperHeroProfile';
import GridIcon from './GridIcon'

const CharacterList = (props) => (
  <div>
    {props.list.map(icon => <GridIcon icon={icon} onClick={props.displaySuperHero}/>)}
  </div>
);

export default CharacterList;
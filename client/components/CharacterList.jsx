import React from 'react';
import SuperHeroProfile from './SuperHeroProfile.jsx';
import GridIcon from './GridIcon.jsx'

// display the Character profile below the grid

const CharacterList = (props) => (
  <div>
    {props.superHeroList.map(superHero => <GridIcon />)}
  </div>
  
);

export default CharacterList;
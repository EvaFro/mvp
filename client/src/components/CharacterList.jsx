import React from 'react';
import SuperHeroProfile from './SuperHeroProfile';

const CharacterList = ({ list }) => (
  <div>
    {list.map(SuperHero => <SuperHeroProfile superHero={superHero} />)}
  </div>
);

export default CharacterList;
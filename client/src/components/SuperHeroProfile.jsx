import React from 'react';

const SuperHeroProfile = (props) => (
  <div>
    <h3>{props.superHero.name}</h3>
    <br/>
    <div>Comics: {props.superHero.comics.available}</div>
    <div>Series: {props.superHero.series.available}</div>
    <div>Stories: {props.superHero.stories.available}</div>
    <div>Events: {props.superHero.events.available}</div>
    <div>Wiki: {props.superHero.urls[1].url}</div>
    <br/>
    <h4>About</h4>
    <p>{props.superHero.description}</p>
    <br/>
    <h4>Top 20 Comics</h4>
    <div>
      {props.superHero.comics.items.map(item => <li>{item.name}</li>)}
    </div>
    <br/>
    <h4>Top 20 Series</h4>
    <div>
      {props.superHero.series.items.map(item => <li>{item.name}</li>)}
    </div>
    <br/>
    <h4>Top 20 Stories</h4>
    <div>
      {props.superHero.stories.items.map(item => <li>{item.name}</li>)}
    </div>
    <br/>
    <h4>Top 20 Events</h4>
    <div>
      {props.superHero.events.items.map(item => <li>{item.name}</li>)}
    </div>
  </div>
);

export default SuperHeroProfile;
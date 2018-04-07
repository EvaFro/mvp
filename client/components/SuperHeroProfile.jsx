import React from 'react';

const SuperHeroProfile = (props) => (
  <div>
    <h1>{props.superHero.name}</h1>
    <img src="avengersIcon.jpg" alt="thubnail" />
    <br/>
    <br/>
    <div>Comics: {props.superHero.comics.available}</div>
    <div>Series: {props.superHero.series.available}</div>
    <div>Stories: {props.superHero.stories.available}</div>
    <div>Events: {props.superHero.events.available}</div>
    <div>Wiki: <a href={props.superHero.urls[1].url}>{`${props.superHero.name} Wiki`}</a></div>
    <br/>
    <h4>About</h4>
    <p>{props.superHero.description}</p>
    <br/>
    <div className="charInfo">
      <div className="topInfo">
        <h4>Top Comics</h4>
        {props.superHero.comics.items.map(item => <li>{item.name}</li>)}
      </div>
      <br/>
      <div className="topInfo">
        <h4>Top Series</h4>
        {props.superHero.series.items.map(item => <li>{item.name}</li>)}
      </div>
      <br/>
      <div className="topInfo">
        <h4>Top Stories</h4>
        {props.superHero.stories.items.map(item => <li>{item.name}</li>)}
      </div>
      <br/>
      <div className="topInfo">
        <h4>Top Events</h4>
        {props.superHero.events.items.map(item => <li>{item.name}</li>)}
      </div>
    </div>
  </div>
);

export default SuperHeroProfile;
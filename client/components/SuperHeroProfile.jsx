import React from 'react';

class SuperHeroProfile extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmit () {
    console.log('clicked!:', this.props.changeAppState)
    this.props.changeAppState('homepage')
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onSubmit()}>Back</button>
        <h1>{this.props.superHero.name}</h1>
        <img src="avengersIcon.jpg" alt="thubnail" />
        <br/>
        <br/>
        <div>Comics: {this.props.superHero.comics.available}</div>
        <div>Series: {this.props.superHero.series.available}</div>
        <div>Stories: {this.props.superHero.stories.available}</div>
        <div>Events: {this.props.superHero.events.available}</div>
        <div>Wiki: <a href={this.props.superHero.urls[1].url}>{`${this.props.superHero.name} Wiki`}</a></div>
        <br/>
        <h4>About</h4>
        <p>{this.props.superHero.description}</p>
        <br/>
        <div className="charInfo">
          <div className="topInfo">
            <h4>Top Comics</h4>
            {this.props.superHero.comics.items.map(item => <li>{item.name}</li>)}
          </div>
          <br/>
          <div className="topInfo">
            <h4>Top Series</h4>
            {this.props.superHero.series.items.map(item => <li>{item.name}</li>)}
          </div>
          <br/>
          <div className="topInfo">
            <h4>Top Stories</h4>
            {this.props.superHero.stories.items.map(item => <li>{item.name}</li>)}
          </div>
          <br/>
          <div className="topInfo">
            <h4>Top Events</h4>
            {this.props.superHero.events.items.map(item => <li>{item.name}</li>)}
          </div>
        </div>
      </div>
    )
  }
};

export default SuperHeroProfile;
import React from 'react';
import {render} from 'react-dom';
import CharacterList from './components/CharacterList'
import SuperHeroProfile from './components/SuperHeroProfile'
import HomePage from './components/HomePage'
import supperHeroData from '../database/data/exapmleData/starterSuperHeroData'
import styles from './components/styles'

 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSuperHero : {},
      display : 'homepage'
    }
  }

  changeAppState (displayString) {
    document.documentElement.scrollTop = 0; 
    this.setState({
      display: displayString ? displayString : this.state.display,
    })
  }

  displayPage() {
    let page = this.state.display
    switch(page) {
      case 'homepage':
        return <HomePage superHeroList={this.props.data} changeAppState={this.changeAppState.bind(this)}/>
      case 'superHero':
        return <SuperHeroProfile superHero={supperHeroData[0]} changeAppState={data => this.changeAppState(data)} />
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome to Marvel Geek-Out Cornner!</h1>
        </div>
        <div>
          {
            this.displayPage()
          }
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="header">
          <div>Data provided by Marvel. © 2014 Marvel</div>
        </div>
      </div>
    );
  }
}

render(<App data={supperHeroData}/>, document.getElementById('app'));

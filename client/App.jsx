import React from 'react';
import {render} from 'react-dom';
import CharacterList from './components/CharacterList.jsx'
import supperHeroData from '../database/data/exapmleData/starterSuperHeroData.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p> Are you excited for the upcoming movie the Avengers: Infinity War!? But want a refesher of the all characters leading up to this multi-francise and multi-character movie! Marvel Character Geek Out Corner is your one stop page for learning the Marvel history of the top 30 charactors that are confermed to be in the film. We at Marvel Geek Out Corner hope you get your Marvel Geek on and enjoy this fun app! </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YZ1UN5gvLjQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br/>
        <br/>
        <CharacterList superHeroList={this.props.data}/>
        <br/>
        <br/>
        <br/>
        <div>Data provided by Marvel. © 2014 Marvel</div>
      </div>
    );
  }
}

render(<App data={supperHeroData}/>, document.getElementById('app'));

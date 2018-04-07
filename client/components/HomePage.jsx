import React from 'react';
import CharacterList from './CharacterList'
import styles from './styles'



const HomePage = (props) => (
  <div>
    <div className="header">
      <p> Are you excited for the upcoming movie the Avengers: Infinity War!? But want a refesher of the all characters leading up to this multi-francise and multi-character movie! Marvel Character Geek Out Corner is your one stop page for learning the Marvel history of the top 27 charactors that are confermed to be in the film. We at Marvel Geek Out Corner hope you get your Marvel Geek on and enjoy this fun app! </p>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YZ1UN5gvLjQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <br/>
    <br/>
    <div>
      <CharacterList superHeroList={props.superHeroList} changeAppState={props.changeAppState.bind(this)} />
    </div>
  </div>
);

export default HomePage;

import React from 'react';
import styles from './styles'

class GridIcon extends React.Component {
  constructor(props){
    super(props)
  }
  
  onSubmit () {
    console.log('clicked!:', this.props.changeAppState)
    this.props.changeAppState('superHero')
  }

  render() {
    return (
      <div className="grid-char">
        <img src="avengersIcon.jpg" alt="thubnail" onClick={() => this.onSubmit()}/>
        <div>{this.props.superHero.name}</div>
      </div>
    );
  }
}

export default GridIcon;

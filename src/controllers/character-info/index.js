import React, { Component } from 'react';

import styles from './styles.module.css';

class CharacterInfo extends Component {
  state = {
    name: '', 
    height: '', 
    mass: '', 
    hairColor: '', 
    skinColor: '', 
    eyeColor: '', 
    birthYear: '', 
    gender: '', 
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://swapi.co/api/people/${id}/`, { method: "GET" })
      .then(res => res.json())
      .then((res) => {
        if (!res) {
          return;
        }

        return this.setState({ 
          name: res.name, 
          height: res.height, 
          mass: res.mass, 
          hairColor: res.hair_color, 
          skinColor: res.skin_color, 
          eyeColor: res.eye_color, 
          birthYear: res.birth_year, 
          gender: res.gender, 
         })
      });
  }

  render() {
    const { name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender } = this.state;

    return (
      <div className={styles.characterInfo}>
        name: {name} <br/>
        height: {height} <br/>
        mass: {mass} <br/> 
        hairColor: {hairColor} <br/>
        skinColor: {skinColor} <br/>
        eyeColor: {eyeColor} <br/> 
        birthYear: {birthYear} <br/> 
        gender: {gender}
      </div>
    );
  }
}

export default CharacterInfo;

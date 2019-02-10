import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './styles.module.css';

class CharacterCard extends Component {
  render() {
    const { name, imageUrl, charId } = this.props;

    return (
      <Link to={`${process.env.PUBLIC_URL}/character-info/${charId}`}>
        <div className={styles.characterCard}>
          {imageUrl && imageUrl.length > 0 && <img className={styles.charImage} src={imageUrl} alt="star wars character"/>}
          {name && name.length > 0 && <div className={styles.labelContainer}><div className={styles.label}>{name}</div></div>}
        </div>
      </Link>
    );
  }
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  charId: PropTypes.string,
  imageUrl: PropTypes.string /* TODO: Pass in image URL to display image of characters */
};

CharacterCard.defaultProps = {
  name: '',
  charId: ''
};

export default CharacterCard;

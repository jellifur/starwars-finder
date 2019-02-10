import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class CharacterCard extends Component {
  render() {
    const { name, onClick, imageUrl } = this.props;

    return (
      <div className={styles.characterCard}>
        {imageUrl && imageUrl.length > 0 && <img className={styles.charImage} src={imageUrl}/>}
        {name && name.length > 0 && <div className={styles.labelContainer}><div className={styles.label}>{name}</div></div>}
      </div>
    );
  }
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  imageUrl: PropTypes.string /* TODO: Pass in image URL to display image of characters */
};

CharacterCard.defaultProps = {
  name: '',
  onClick: () => undefined
};

export default CharacterCard;

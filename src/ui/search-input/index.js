import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class SearchInput extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;

    return (
      <form className={styles.searchInput}>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit" className={styles.searchBtn} onClick={onSubmit}>
          {/* TODO: Use an icon library and remove img src*/}
          <img src="/assets/search.svg" alt="Search"/>
        </button>
      </form>
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func
};

SearchInput.defaultProps = {
  value: '',
  onSubmit: () => undefined
};

export default SearchInput;

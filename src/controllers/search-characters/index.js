import React, { Component } from 'react';

import SearchInput from 'ui/search-input/index.js';
import CharacterCard from 'ui/character-card/index.js';

import styles from './styles.module.css';

class SearchCharacters extends Component {
  state = {
    searchValue: '',
    characters: [],
    nextUrl: undefined,
    prevUrl: undefined
  }

  componentDidMount() {
    /* TODO: Query first set of characters so page is not blank */
  }

  handleSearchChange = event => this.setState({ searchValue: event.target.value });

  handleSubmit = event => {
    const { searchValue } = this.state;

    event.preventDefault();
    if (searchValue && searchValue.length > 0) {
      this.fetchUrl(`https://swapi.co/api/people/?search=${searchValue}`);
    }
  }

  fetchUrl = url => {
    if (!url) {
      return;
    }

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then((res) => {
        if (!res) {
          return;
        }

        /* TODO: Get lodash to check nested results more cleanly */
        const nextUrl = res.next ? res.next : undefined
        const prevUrl = res.previous ? res.previous : undefined
        return this.setState({ characters: res.results, prevUrl, nextUrl })
      });
  }

  /* HACK: The results doesn't seem to provide the character ID, but it is part of the URL.
     This function extracts the number.
  */
  getCharId = url => url.match(/\d+/);

  render() {
    const { searchValue, characters, prevUrl, nextUrl } = this.state;

    return (
      <React.Fragment>
        <div className={styles.background}></div>

        <div className={styles.search}>
          <div className={styles.searchContainer}>
            <header className={styles.searchHeader}>
              <h1 className={styles.title}>Star Wars Characters</h1>
              <p className={styles.appDescription}>
                You can search for any Star Wars character. <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing. <br/>
                Sed ut perspiciatis unde omnis iste natus.
              </p>
            </header>

            <div className={styles.searchBox}>
              <SearchInput value={searchValue} onChange={this.handleSearchChange} onSubmit={this.handleSubmit}/>
            </div>

            <div className={styles.characters}>
              {characters.map(char => {
                const id = this.getCharId(char.url).toString();
                return <CharacterCard name={char.name} key={id} charId={id}/>;
              })}
            </div>

            <div className={styles.navBtns}>
              {prevUrl && <button className={styles.navBtn} onClick={() => this.fetchUrl(prevUrl)}>&lt;&lt; Prev</button>}
              {nextUrl && <button className={styles.navBtn} onClick={() => this.fetchUrl(nextUrl)}>Next &gt;&gt;</button>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchCharacters;

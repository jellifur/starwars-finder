import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CharacterInfo from 'controllers/character-info/index.js';
import SearchCharacters from 'controllers/search-characters/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={SearchCharacters} />
          <Route path={`${process.env.PUBLIC_URL}/character-info/:id`} component={CharacterInfo} />
        </div>
      </Router>
    );
  }
}

export default App;

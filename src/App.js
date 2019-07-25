import React from 'react';
import { FormattedMessage } from 'react-intl';

import './App.css';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            id="add.edit"
            values={{
              code: <code>src/App.js</code>
            }}
            defaultMessage="Edit {code} and save to reload."
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.learn" defaultMessage="Learn React" />
        </a>
      </header>
    </div>
  );
}

export default App;

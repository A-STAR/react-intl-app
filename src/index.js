import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import esLocaleData from "react-intl/locale-data/es";
import svLocaleData from "react-intl/locale-data/sv";

import * as serviceWorker from './serviceWorker';

import translations from './i18n/locales';

import './index.css';

import App from './App';

addLocaleData(esLocaleData);
addLocaleData(svLocaleData);

const locale = window.location.search.replace('?locale=', '') || 'en'
const messages = translations[locale];

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

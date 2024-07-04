import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import home_en from './Translations/en/Home.json';
import home_es from './Translations/es/Home.json';
import home_kr from './Translations/kr/Home.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  fallbackLng: 'en',
  lng : "en",
  resources : {
    en: {
      global: home_en
    },
    es : {
      global: home_es
    },
    kr : {
      global: home_kr
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}> 
      <App/>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

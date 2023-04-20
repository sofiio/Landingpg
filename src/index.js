import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 
      'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translations.json',
    },
    react: {useSuspense: false},
  });


  // function Appi() {
  //   const { t } = useTranslation();
  
  //   return <h2>{t('welcome_to_react')}</h2>;
  // }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

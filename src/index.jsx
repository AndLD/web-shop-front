import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

//CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
import './customizeBootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './normalize.css'
import './general.scss'
// import '../public/fonts/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

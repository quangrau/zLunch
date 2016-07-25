import './assets/material.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import Root from './Root';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Set the configuration for your app
const config = {
  apiKey: 'AIzaSyDoF75SUoXoCOGIVBLOA_6zL15TKq832GY',
  authDomain: 'tc-lunch.firebaseapp.com',
  databaseURL: 'https://tc-lunch.firebaseio.com',
};

// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

ReactDOM.render(
  <Root 
    firebase={firebase}
    database={database}
  />,
  document.getElementById('root')
);

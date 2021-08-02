import React from 'react';

import Navigation from './navigation/Navigation';

import config from "./firebase"
import firebase from "firebase";


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default function App() {

  return (
    <Navigation/>
  );
}


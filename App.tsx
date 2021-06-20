import React from 'react';

import { createStore } from 'redux';
import {Provider} from "react-redux"
import reducers from "./redux/store"

import Navigation from './navigation/Navigation';

import config from "./firebase"
import firebase from "firebase";


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


export default function App() {

  const store = createStore(reducers)


  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


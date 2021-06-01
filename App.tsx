import React from 'react';

import {NavigationContainer} from "@react-navigation/native"
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';

import firebase from "firebase/app"
import "firebase/database"

import LoginRegScreen from "./screens/LoginRegScreen"
import ChooseUserNameScreen from "./screens/ChooseUsernameScreen"
import ChatScreen from "./screens/ChatScreen"
export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyAGIH7M-Sutr1ShDeMJaTeIIJsBP3-8Kqk",
    authDomain: "chapapp-ff982.firebaseapp.com",
    databaseURL: "https://chapapp-ff982-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chapapp-ff982",
    storageBucket: "chapapp-ff982.appspot.com",
    messagingSenderId: "937474970037",
    appId: "1:937474970037:web:681d09518945ac284689fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Register" component={LoginRegScreen}/>
        <Stack.Screen name="ChooseUserNameScreen" component={ChooseUserNameScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


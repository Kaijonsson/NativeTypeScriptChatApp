import React from 'react';

import {NavigationContainer} from "@react-navigation/native"
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';

import LoginRegScreen from "./screens/LoginRegScreen"
import ChooseUserNameScreen from "./screens/ChooseUsernameScreen"
import ChatScreen from "./screens/ChatScreen"

import globalStyle from "./css/globalStyle"

import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

import {RootStackParamList} from "./types/types"

const firebaseConfig = {
  apiKey: "AIzaSyAzSuTVB7AAcdBszY3puM36ytPnkQmFutE",
  authDomain: "redmind-chat-app.firebaseapp.com",
  databaseURL: "https://redmind-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "redmind-chat-app",
  storageBucket: "redmind-chat-app.appspot.com",
  messagingSenderId: "501073455568",
  appId: "1:501073455568:web:fb9b698b168888c7e871d5"
};

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);
}


export default function App() {

  
 
  // const Stack = createStackNavigator();
  const RootStack = createStackNavigator<RootStackParamList>()


  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginRegScreen" screenOptions={{headerShown: false}}>
        <RootStack.Screen options={globalStyle.headerOptions} name="LoginRegScreen" component={LoginRegScreen}/>
        <RootStack.Screen options={globalStyle.headerOptions} name="ChooseUserNameScreen" component={ChooseUserNameScreen} initialParams={{googleResult: Object}}/>
        <RootStack.Screen options={globalStyle.headerOptions} name="ChatScreen" component={ChatScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


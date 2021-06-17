import React from 'react';

import {NavigationContainer} from "@react-navigation/native"
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux';
import {Provider} from "react-redux"
import reducers from "./redux/store"

import LoginRegScreen from "./screens/LoginRegScreen"
import ChooseUserNameScreen from "./screens/ChooseUsernameScreen"
import ChatScreen from "./screens/ChatScreen"

import globalStyle from "./css/globalStyle"

import {RootStackParamList} from "./types/types"

import config from "./firebase"
import firebase from "firebase";


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


export default function App() {

  
 
  const RootStack = createStackNavigator<RootStackParamList>()

  const store = createStore(reducers)


  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginRegScreen" screenOptions={{headerShown: false}}>
        <RootStack.Screen options={globalStyle.headerOptions} name="LoginRegScreen" component={LoginRegScreen}/>
        <RootStack.Screen options={globalStyle.headerOptions} name="ChooseUserNameScreen" component={ChooseUserNameScreen}/>
        <RootStack.Screen options={globalStyle.headerOptions} name="ChatScreen" component={ChatScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


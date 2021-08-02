import React from 'react'
import globalStyle from '../css/globalStyle';

import {NavigationContainer} from "@react-navigation/native"
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';


import LoginRegScreen from "../screens/LoginRegScreen"
import ChooseUserNameScreen from "../screens/ChooseUsernameScreen"
import ChatScreen from "../screens/ChatScreen"

import {RootStackParamList} from "../types/types"



const Navigation = () => {

    const RootStack = createStackNavigator<RootStackParamList>()


    return (
        <NavigationContainer>
        <RootStack.Navigator initialRouteName="LoginRegScreen" screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: globalStyle.mainBackgroundColor}
        }}>
          <RootStack.Screen options={globalStyle.headerOptions} name="LoginRegScreen" component={LoginRegScreen}/>
          <RootStack.Screen options={globalStyle.headerOptions} name="ChooseUserNameScreen" component={ChooseUserNameScreen}/>
          <RootStack.Screen options={globalStyle.headerOptions} name="ChatScreen" component={ChatScreen}/>
        </RootStack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation


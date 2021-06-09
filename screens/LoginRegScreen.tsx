import React, {useState} from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import globalStyle from "../css/globalStyle"

import firebase from 'firebase';
import "firebase/auth"
import * as GoogleAuth from 'expo-google-app-auth';

import {useNavigation} from "@react-navigation/native"



const LoginRegScreen = () => {

    const navigation = useNavigation()

        const iOSExpoClient = "501073455568-3snsp90qkej1rbumi601guo6ojev9139.apps.googleusercontent.com"
        const androidExpoClient = "501073455568-cq3fri9n42n6n82sh2mel4q85d7lcnqr.apps.googleusercontent.com"

        const signInWithGoogle = async () => {
            try {
              const result = await GoogleAuth.logInAsync({
                iosClientId: iOSExpoClient,
                androidClientId: androidExpoClient,
                scopes: ['profile', 'email']
              });
              
              if (result.type  === 'success') {
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
                firebase.auth().signInWithCredential(credential);
                navigation.navigate("ChooseUserNameScreen", {googleResult: result})
              }
            } catch ({ message }) {
              alert('login: Error:' + message);
            }
          }

          

        
    return (
        <View  style={styles.container}>
                <TouchableOpacity onPress={signInWithGoogle}>
                    <View style={styles.loginProviders}>
                        <Image style={styles.providerImage} source={require("../assets/google.png")}/>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default LoginRegScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyle.mainBackgroundColor,
        padding: globalStyle.mainWidthDistance,
        justifyContent: "space-around",
        alignItems: "center",
      },
      containerWithUser: {
        flex: 1,
        backgroundColor: globalStyle.mainBackgroundColor,
        padding: globalStyle.mainWidthDistance,
        alignItems: "center",
      },
      loginProviders: {
        flexDirection: "row",
        minHeight: 80,
        marginTop: globalStyle.elementMarginTop
      },
      providerImage: {
          height: 80,
          width: 80,
      }


})

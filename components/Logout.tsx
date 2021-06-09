import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

import firebase from 'firebase';
import "firebase/auth"

import { useNavigation } from '@react-navigation/native';


const Logout = () => {

    const navigation = useNavigation()

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("signed out")
            navigation.navigate("LoginRegScreen")
          }).catch((error) => {
              console.log(error)
          });
      }

    return (
            <Button onPress={logOut} title="Sign Out"/>
    )
}

export default Logout

const styles = StyleSheet.create({
 
})

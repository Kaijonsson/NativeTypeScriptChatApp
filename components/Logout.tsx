import React, {useState} from 'react'
import { StyleSheet, Button } from 'react-native'

import firebase from 'firebase';
import "firebase/auth"

import { useNavigation } from '@react-navigation/native';


const Logout = () => {


    const navigation = useNavigation()

    const SignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("signed out")
            navigation.navigate("LoginRegScreen")
          }).catch((error) => {
              console.log(error)
          });
      }

   
        return <Button onPress={SignOut} title="Sign Out"/>

}

export default Logout

const styles = StyleSheet.create({
 
})

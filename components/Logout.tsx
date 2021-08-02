import React, {useState} from 'react'
import { StyleSheet, Button } from 'react-native'

import firebase from 'firebase';

import { useNavigation } from '@react-navigation/native';


const Logout = () => {


    const navigation = useNavigation()

    const SignOut = () => {

        const activeUser = firebase.auth().currentUser?.uid
        console.log(activeUser)
        console.log(firebase.database().ref("users/" + activeUser))
        firebase.database().ref("users").child(activeUser!).remove()

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

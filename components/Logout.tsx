import React, {useState} from 'react'
import { StyleSheet, Button } from 'react-native'

import firebase from 'firebase';
import "firebase/auth"

import { useNavigation } from '@react-navigation/native';


const Logout = () => {

    const [user, setUser]= useState(false)

    const navigation = useNavigation()

    const SignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("signed out")
            navigation.navigate("LoginRegScreen")
          }).catch((error) => {
              console.log(error)
          });
      }

    firebase.auth().onAuthStateChanged((user)=> {
        if(!user){
            setUser(false)
            console.log("user is signed out")
        }else {
            setUser(true)
            console.log("user is signed in")
        }
    })
    if(user === true){
        return <Button onPress={SignOut} title="Sign Out"/>
    }else {
        return null
    }

}

export default Logout

const styles = StyleSheet.create({
 
})

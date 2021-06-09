import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

import firebase from 'firebase';
import "firebase/auth"



const ChooseUsername = ({navigation}: {navigation:any}) => {

    const logOut = () => {
        firebase.auth().signOut().then(() => {

            console.log("signed out")
            navigation.navigate("LoginRegScreen")
          }).catch((error) => {
              console.log(error)
          });
      }

    return (
        <View>
            <Text>Hej</Text>
            <Button onPress={logOut} title="Sign Out"/>
        </View>
    )
}

export default ChooseUsername

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
    }
})

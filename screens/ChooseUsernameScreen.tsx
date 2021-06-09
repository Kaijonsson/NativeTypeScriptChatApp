import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import globalStyle from "../css/globalStyle"

import firebase from 'firebase';
import "firebase/auth"

import { useNavigation } from '@react-navigation/native';




const ChooseUsername = ({route}: {route: Object}) => {

    const navigation = useNavigation()
    console.log("ROUTE: ", route)

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("signed out")
            navigation.navigate("LoginRegScreen")
          }).catch((error) => {
              console.log(error)
          });
      }

    return (
        <View style={styles.container}>
            <Button onPress={logOut} title="Sign Out"/>
        </View>
    )
}

export default ChooseUsername

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyle.mainBackgroundColor,
        justifyContent: "center",
        alignItems: "center",
    }
})

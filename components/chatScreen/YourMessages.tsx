import React, {useState} from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import firebase from 'firebase'
import "firebase/database"

interface userObjectProp {
    userCredentials: credentialsObject,
}

interface credentialsObject {
    id: string,
  }
  

const YourMessages = ({userCredentials}: userObjectProp) => {

    const [messages, setMessages] = useState(Array)

    // console.log("cred: ", userCredentials)

    firebase.database().ref("users/" + userCredentials.id + "/posts").on("value", (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
            console.log(childSnapshot.child("message").val())
            // setMessages(messages=>[...messages, childSnapshot.child("message").val()])
        })
    })

    // console.log("messages: ", messages)

    // const renderItem = ([item]: any)=> {
    //     return (
    //         <Text>{item}</Text>
    //     )
    // }

    return (
        <View>
            {/* <FlatList data={messages} renderItem={renderItem} extraData={messages}/> */}
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({})

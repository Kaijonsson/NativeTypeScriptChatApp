import React, {useState} from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import firebase from 'firebase'
import "firebase/database"
import { useEffect } from 'react'
import globalStyle from '../../css/globalStyle'

interface userObjectProp {
    userCredentials: {
        id: string,
        name: string,
    },
}

const YourMessages = ({userCredentials}: userObjectProp) => {

    const [input, setInput] = useState(Array)

    console.log("cred: ", userCredentials)
    useEffect(()=> {
        firebase.database().ref("users/" + userCredentials.id + "/posts").on("child_added", (snapshot)=> {
            // console.log("name: ", userCredentials.name)
            // console.log("message: ", snapshot.child("message"))
            snapshot.forEach((childSnapshot)=> {
                console.log("child val: ", childSnapshot.val())
               setInput([...input, childSnapshot.val()])
            } )
        })
    }, [input])

    console.log(input)

    const renderItem = ({item}: any)=> {
        return (
            <View key={item.message}>
                <Text style={styles.text}>{userCredentials.name}</Text>
                <Text style={styles.text}>{item.message}{console.log("text: ", item.message)}</Text>
            </View>
            )
    }

    return (
        <View>
            <Text style={styles.text}>Hej</Text>
            <FlatList data={input} renderItem={renderItem} extraData={input}/>
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: globalStyle.textFontSize,

    }
})

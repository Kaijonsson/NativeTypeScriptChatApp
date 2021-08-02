import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

import { useNavigation } from '@react-navigation/core'
import firebase from 'firebase'

import globalStyle from "../../css/globalStyle"
interface data {
    user: {
        name: string,
        id: string,
    }
}

const NewChoice = ({user}: data) => {

    const userId = firebase.auth().currentUser?.uid

    const navigation = useNavigation()
    const [input, setInput] = useState("")

    const newUserName = ()=> {
        firebase.database().ref("users/" + userId).update({user: input})
        user.name = input
        const activeUser = user
        navigation.navigate("ChatScreen", {user: activeUser})
        
    }

    return (
        <View style={styles.spanContainer}>
                    <TextInput onChangeText={setInput} value={input} style={styles.textInput} placeholder="New username"/>
                    <TouchableOpacity onPress={newUserName}>
                        <View style={styles.continueButton}>
                        <Text style={styles.text}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
    )
}

export default NewChoice

const styles = StyleSheet.create({
    spanContainer: {
        flexDirection: "row",
    },
    textInput: {
        fontSize: globalStyle.textFontSize,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        padding: globalStyle.elementPadding,
        color: "black",
        borderRadius: globalStyle.buttonBorderRadius,
        backgroundColor: "white",
    },
    continueButton: {
        borderRadius: globalStyle.buttonBorderRadius,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        borderColor: globalStyle.mainColorGreen,
        padding: globalStyle.elementPadding,
    },
    text: {
        fontSize: globalStyle.textFontSize,
    },
})

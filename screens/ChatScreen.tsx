import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'

import {Props} from "../types/types"


const ChatScreen = ({route}: Props) => {

    console.log("chatRoute: ", route)

    const [input, setUserInput] = useState(String)

    const sendText = () => {

    }

    return (
        <View style={styles.container}>
            <Logout/>
            <View style={styles.chatWindow}>
            </View>
            <View style={styles.chatAndButton}>
                <TextInput onChangeText={setUserInput} value={input} style={styles.textInput} placeholder="Chat..."/>
                <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>Send</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyle.mainBackgroundColor,
        paddingBottom: 20,
    },
    textInput: {
        fontSize: globalStyle.textFontSize,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        padding: globalStyle.elementPadding,
        color: "black",
        borderRadius: globalStyle.buttonBorderRadius,
        flexGrow: 1,
    },
    text: {
        fontSize: globalStyle.textFontSize,

    },
    chatWindow: {
        backgroundColor: "white",
        flex: 2,
        minWidth: "95%",
        marginBottom: 20,
        borderRadius: globalStyle.buttonBorderRadius,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth
    },
    chatAndButton: {
        flexDirection: "row",
        minWidth: "95%",
        
    },
    button: {
        borderRadius: globalStyle.buttonBorderRadius,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        padding: globalStyle.elementPadding,

    }
})

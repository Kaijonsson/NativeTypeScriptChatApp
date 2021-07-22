import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'
import YourMessages from '../components/chatScreen/YourMessages'
import SendText from '../components/chatScreen/SendText'

import {Props} from "../types/types"

const ChatScreen = ({route}: Props) => {

    const userObject = route.params.user
    console.log("userObject: ", userObject)

    const [input, setUserInput] = useState(String)

    return (
        <View style={styles.container}>
            <Logout/>
            <View style={styles.chatWindow}>
                     <YourMessages user={userObject}/>
            </View>
            <View style={styles.chatAndButton}>
                <TextInput onChangeText={setUserInput} value={input} style={styles.textInput} placeholder="Chat..."/>
                <SendText message={input} userCredentials={userObject} />
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
        paddingTop: 20,
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
        backgroundColor: "white",
    },
    chatWindow: {
        backgroundColor: "white",
        flex: 2,
        minWidth: "95%",
        marginBottom: 20,
        borderRadius: globalStyle.buttonBorderRadius,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        flexDirection: "row",
    },
    chatAndButton: {
        flexDirection: "row",
        minWidth: "95%",
        zIndex: 1,
        position: "relative",
        
    },

})

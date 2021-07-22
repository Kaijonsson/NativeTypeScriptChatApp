import React from 'react'
import { StyleSheet, View } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'
import YourMessages from '../components/chatScreen/YourMessages'
import SendText from '../components/chatScreen/SendText'

import {Props} from "../types/types"

const ChatScreen = ({route}: Props) => {
    const userObject = route.params.user
    console.log("userObject: ", userObject)


    return (
        <View style={styles.container}>
            <Logout/>
            <View style={styles.chatWindow}>
                <YourMessages user={userObject}/>
            </View>
                <SendText userCredentials={userObject} />
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
   

})

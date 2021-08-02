import React from 'react'
import { StyleSheet, View } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'
import YourMessages from '../components/chatScreen/YourMessages'
import SendText from '../components/chatScreen/SendText'

import {Props} from "../types/types"

const ChatScreen = ({route}: Props) => {
    const userObject = route.params.user


    return (
        <View style={styles.container}>
            <View style={styles.chatWindow}>
                <YourMessages user={userObject}/>
                <View style={styles.activeUsers}>
                </View>
            </View>
                <SendText userCredentials={userObject} />
            <Logout/>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: globalStyle.elementPadding,
        paddingTop: globalStyle.elementPadding,
        marginHorizontal: globalStyle.elementPadding,
    },
    chatWindow: {
        backgroundColor: "white",
        flex: 2,
        minWidth: "95%",
        marginBottom: globalStyle.elementPadding,
        borderRadius: globalStyle.buttonBorderRadius,
        borderColor: globalStyle.mainColorGreen,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        flexDirection: "row",
    },
    activeUsers: {
        backgroundColor: "gray",

    }

})

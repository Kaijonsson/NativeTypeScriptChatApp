import React from 'react'
import { KeyboardAvoidingView, StyleSheet, View, Platform } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'
import YourMessages from '../components/chatScreen/YourMessages'
import SendText from '../components/chatScreen/SendText'

import {Props} from "../types/types"
import ActiveUserList from '../components/chatScreen/ActiveUserList'

const ChatScreen = ({route}: Props) => {

    const userObject = route.params.user


    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.chatWindow}>
                <View style={styles.listContainer}>
                    <View style={styles.activeUsers}>
                        <ActiveUserList/>
                </View>
                    <YourMessages user={userObject}/>
                    </View>
            </View>
                <SendText userCredentials={userObject} />
            <Logout/>
        </KeyboardAvoidingView>

        
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
    },
    activeUsers: {
        borderBottomColor: globalStyle.mainColorGreen,
        borderBottomWidth: globalStyle.standardBorderWidth,
    },
    listContainer: {
        paddingBottom: globalStyle.elementPadding,
        flexGrow: 1,
    },

})

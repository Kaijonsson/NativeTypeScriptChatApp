import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyle from '../css/globalStyle'

import Logout from '../components/Logout'
import YourMessages from '../components/chatScreen/YourMessages'
import SendText from '../components/chatScreen/SendText'

import {Props} from "../types/types"

const ChatScreen = ({route}: Props) => {
    // const [users, setUsers] = useState(Array)

    const userObject = route.params.user

    // useEffect(()=> {
    //     setUsers(users => [...users, userObject.name])
    // }, [users])


    return (
        <View style={styles.container}>
            <View style={styles.chatWindow}>
            <View style={styles.listContainer}>

                    <YourMessages user={userObject}/>
                    </View>

                <View style={styles.activeUsers}></View>
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
        flexGrow: 1,
        borderLeftColor: globalStyle.mainColorGreen,
        borderLeftWidth: globalStyle.standardBorderWidth,
    },
    listContainer: {
        paddingVertical: globalStyle.elementPadding,
        flexGrow: 4,
    },

})

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import globalStyle from "../css/globalStyle"

import Logout from "../components/Logout"

import { useNavigation } from '@react-navigation/core'

import {Props} from "../types/types"
import NewChoice from '../components/chooseUserNameScreen/NewChoice'

const ChooseUsername = ({route}: Props) => {

    const navigation = useNavigation()


    const userName = route.params.user.name
    const activeUser = route.params.user

    const nextPage = () => {
        navigation.navigate("ChatScreen", {user: activeUser})
    }

    return (
        <View style={styles.container}>
            <View style={styles.userNameSubContainer}>
                <TouchableOpacity onPress={nextPage}>
                <View style={styles.continueButton}>
                    <Text style={styles.text}>Continue as: {userName}</Text>
                </View>
                </TouchableOpacity>
                <View>
                    <NewChoice user={activeUser}/>
                </View>
            </View>
            <Logout/>
            <View style={styles.bottomDistance}/>
        </View>
    )
}

export default ChooseUsername

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    userNameSubContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexGrow: 1,
    },
    text: {
        fontSize: globalStyle.textFontSize,
    },
    continueButton: {
        borderRadius: globalStyle.buttonBorderRadius,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        borderColor: globalStyle.mainColorGreen,
        padding: globalStyle.elementPadding,
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
    bottomDistance: {
        paddingBottom: 20,
    }
})

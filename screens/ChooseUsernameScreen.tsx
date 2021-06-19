import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import globalStyle from "../css/globalStyle"

import Logout from "../components/Logout"
import NewNameModal from '../components/chooseUserNameScreen/NewNameModal'

import { useNavigation } from '@react-navigation/core'

import {Props} from "../types/types"

import "firebase/auth"
import firebase from "firebase"

const ChooseUsername = ({route}: Props) => {

    const navigation = useNavigation()

    console.log("ROUTE: ", route)

    const userName = route.params.user.name
    const activeUser = route.params.user

    const nextPage = () => {
        navigation.navigate("ChatScreen", {activeUser})
    }

    console.log("CURRENTUSER: ", firebase.auth().currentUser)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={nextPage}>
            <View style={styles.continueButton}>
                <Text style={styles.text}>Continue as: {userName}</Text>
            </View>
            </TouchableOpacity>
            <View style={globalStyle.globalTopDistance}/>
            <View style={styles.modal}>
            <NewNameModal/>
            </View>
            <Logout/>
        </View>
    )
}

export default ChooseUsername

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyle.mainBackgroundColor,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {

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
})

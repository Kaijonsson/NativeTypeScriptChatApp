import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import globalStyle from "../css/globalStyle"

import Logout from "../components/Logout"

import { useNavigation } from '@react-navigation/native';

import {Props} from "../types/types"



const ChooseUsername = ({route}: Props) => {

    const navigation = useNavigation()


    console.log("ROUTE: ", route)

    console.log("User: ", route.params.username)
    const userName = route.params.username



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Hello {userName}</Text>
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
    text: {
        fontSize: globalStyle.textFontSize,
    }
})
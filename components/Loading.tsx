import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import globalStyle from '../css/globalStyle'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        color: "black",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyle.mainBackgroundColor
    }
})

import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import globalStyle from "../css/globalStyle"

const LoginRegScreen = () => {
    return (
        <View  style={styles.container}>
            <View style={globalStyle.globalTopDistance} />
            <View style={styles.spanContainer}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.text}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.middleDistance}/>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.text}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginRegScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyle.mainBackgroundColor,
        alignItems: 'center',
      },
      spanContainer: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "center"
      },
      text: {
          fontSize: globalStyle.headerOneFontSize,
      },
      button: {
          backgroundColor: globalStyle.mainColorGreen,
          padding: 20,
          borderRadius: globalStyle.buttonBorderRadius,
      },
      middleDistance: {
        width: 5,
      }
})

import React, {memo} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import globalStyle from "../../css/globalStyle"

interface item {
    item: {
        message: string,
        name: string | undefined,
    }
    user: {
        name: string,
    },
}

const List = ({item, user}: item) => {

    const activeUser = user.name

    if (activeUser === item.name){
        return (
            <View style={styles.listContainerForUser}>
                <Text>{item.name}</Text>
                <Text style={styles.text}>{item.message}</Text>    
            </View> 
        )
    }else {

        return (
            <View style={styles.listContainerForAllOthers}>
                <Text>{item.name}</Text>
                <Text style={styles.text}>{item.message}</Text>    
            </View> 
        )
    }
        
}

export default List

const styles = StyleSheet.create({
 
    listContainerForUser: {
        alignItems: "flex-start",
        paddingLeft: globalStyle.elementPadding
    },
    listContainerForAllOthers: {
        alignItems: "flex-end",
        paddingRight: globalStyle.elementPadding
    },
    text: {

        fontSize: globalStyle.textFontSize,
        backgroundColor: globalStyle.mainBackgroundColor
    },
})

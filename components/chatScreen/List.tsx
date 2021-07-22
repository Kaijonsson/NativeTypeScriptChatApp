import React, {memo} from 'react'
import { BackHandler, StyleSheet, Text, View } from 'react-native'

import globalStyle from "../../css/globalStyle"

interface item {
    item: {
        message: string,
        name: string,
        id: string,
    }
    user: {
        name: string,
        id: string
    },
}

const List = ({item, user}: item) => {

    const activeUserId = user.id

    if (activeUserId === item.id){
        return (
            <View style={styles.listContainerForUser}>
                    <Text>{item.name}</Text>
                <View style={styles.nestedSelfContainer}>
                    <Text style={styles.textforUser}>{item.message}</Text>    
                </View>
            </View> 
        )
    }else {

        return (
            <View style={styles.listContainerForAllOthers}>
                    <Text>{item.name}</Text>
                <View style={styles.nestedOthersContainer}>
                    <Text style={styles.textForAllOthers}>{item.message}</Text>    
                </View>
            </View> 
        )
    }
        
}

export default List

const styles = StyleSheet.create({
 
    listContainerForUser: {
        alignItems: "flex-start",
        paddingLeft: globalStyle.elementPadding,
    },
    listContainerForAllOthers: {
        alignItems: "flex-end",
        paddingRight: globalStyle.elementPadding,
    },
    nestedOthersContainer: {
        backgroundColor: globalStyle.mainBackgroundColor,
        paddingVertical: 10,
        paddingRight: 10,
        borderWidth: globalStyle.standardBorderWidth,
        borderColor: globalStyle.mainBackgroundColor,
        borderRadius: 10,

    },
    nestedSelfContainer: {
        backgroundColor: globalStyle.mainColorGreen,
        paddingVertical: 10,
        paddingRight: 10,
        borderWidth: globalStyle.standardBorderWidth,
        borderColor: globalStyle.mainColorGreen,
        borderRadius: 10,

    },
    textforUser: {
        fontSize: globalStyle.textFontSize,
        textAlign: "left"
    },
    textForAllOthers: {
        fontSize: globalStyle.textFontSize,
        textAlign: "left"
    },
})

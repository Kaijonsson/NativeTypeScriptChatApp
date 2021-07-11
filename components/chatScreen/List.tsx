import React, {memo} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import globalStyle from "../../css/globalStyle"

interface item {
    item: {
        message: string,
    }
}

const List = ({item}: item) => {
    return (
        
        <View style={styles.flatlist}>
        <Text style={styles.text}>{item.message}</Text>
    </View> 
    )
}

const areEqual = (prevProps: item, nextProps: item) => {
    const {item: isSelected} = nextProps;
    const {item: prevIsSelected} = prevProps
    const isSelectedEqual = isSelected ===prevIsSelected
    return isSelectedEqual
}

export default memo(List, areEqual)

const styles = StyleSheet.create({
    flatlist: {
        backgroundColor: globalStyle.mainColorGreen,
        minWidth: 0,

    },
    text: {
        fontSize: globalStyle.textFontSize,
    },
})

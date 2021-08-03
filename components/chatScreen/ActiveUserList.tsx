import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Text, View, } from 'react-native'

import globalStyle from '../../css/globalStyle'

import firebase from 'firebase'

interface DataBaseUser {
        id: string,
        user: string,
}


const ActiveUserList = () => {

    const [activeUsers, setActiveUsers] = useState<Array<DataBaseUser>>([])

    useEffect(()=> {
        firebase.database().ref("users").on("child_added", (snapshot)=> {
            if(snapshot.exists())
            setActiveUsers(activeUsers => [...activeUsers, {id: snapshot.val().id, user: snapshot.val().user}])
        })
    }, [])
    
    firebase.database().ref("users").on("child_removed", (oldChildSnapshot)=> {
        setActiveUsers(activeUsers.filter(item => item.id !== oldChildSnapshot.val().id))
    })

    const itemSeparator = () => {
        return (
          <View
            style={{
              paddingRight: 10,
              borderRightWidth: 1,
              borderRightColor: globalStyle.mainColorGreen,
            }}
          />
        );
      };

    return (
        <View>
            <Text>Active Users:</Text>
            <FlatList data={activeUsers} ItemSeparatorComponent={itemSeparator} horizontal={true} extraData={activeUsers} renderItem={({item})=> {
                return (
                    <View key={item.id}>
                        <Text style={styles.itemText}>{item.user}</Text>
                    </View>
                )
            }} />
            <View style={styles.borderSeparator}></View>
        </View>
    )
}

export default ActiveUserList

const styles = StyleSheet.create({
    itemText: {
        fontSize: globalStyle.textFontSize,
        paddingLeft: 10,
        
    },
    borderSeparator: {
        height: 10,
    }

})

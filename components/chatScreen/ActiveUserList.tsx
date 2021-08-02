import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Text, View, } from 'react-native'

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
    return (
        <FlatList data={activeUsers} extraData={activeUsers} renderItem={({item})=> {
            return (
                <View key={item.id}>
                    <Text>{item.user}</Text>
                </View>
            )
        }} />
    )
}

export default ActiveUserList

const styles = StyleSheet.create({})

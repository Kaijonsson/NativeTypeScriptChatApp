import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'

import firebase from 'firebase'
import "firebase/database"

interface DataBaseUser {
        id: string,
        user: string,
}


const ActiveUserList = () => {

    const [activeUsers, setActiveUsers] = useState<Array<DataBaseUser>>([])

    useEffect(()=> {
        firebase.database().ref("users").on("child_added", (snapshot)=> {
            console.log(snapshot.val())
            if(snapshot.exists())
            setActiveUsers(activeUsers => [...activeUsers, {id: snapshot.val().id, user: snapshot.val().user}])
        })
    }, [])

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

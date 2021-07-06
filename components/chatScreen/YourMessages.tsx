import React, {useState} from 'react'
import { StyleSheet, FlatList, View, Text, ListRenderItem } from 'react-native'

import firebase from 'firebase'
import "firebase/database"
import { useEffect } from 'react'
import globalStyle from '../../css/globalStyle'

interface userObjectProp {
    userCredentials: {
        id: string,
        name: string,
    },
}

interface flatlistItem {
        message: string,
        id: string,
        timeStamp: string,
}

const YourMessages = ({userCredentials}: userObjectProp) => {

    const [input, setInput] = useState([{}])

    console.log("cred: ", userCredentials)
    useEffect(()=> {
        firebase.database().ref("users/" + userCredentials.id + "/posts").on("child_added", (snapshot)=> {
            setInput(input => [...input, snapshot])
        })
    }, [])

    const itemSeparator = () => {
        return (
          <View
            style={{
              height: 2,
            }}
          />
        );
      };

    const renderItem: ListRenderItem<flatlistItem> = ({item})=> {
        console.log("item: ", item)
        console.log("item.message: ", item.message)
        return (
            <View style={styles.flatlist}>
                <Text style={styles.text}>{userCredentials.name}</Text>
                <Text style={styles.text}>{item.message}</Text>
            </View>
            )
    }

    [{}]

    return (
        <View>
            <Text style={styles.text}>Hej</Text>
            <FlatList data={input} renderItem={renderItem} extraData={input} ItemSeparatorComponent={itemSeparator} keyExtractor={(item, index) => index.toString()}
/>
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: globalStyle.textFontSize,
    },
    flatlist: {
        backgroundColor: "gray",
    }
})

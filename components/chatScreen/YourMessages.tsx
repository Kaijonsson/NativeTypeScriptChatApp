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

const YourMessages = ({userCredentials}: userObjectProp) => {

    const [input, setInput] = useState<String[]>([])

    useEffect(()=> {
        firebase.database().ref("users/" + userCredentials.id + "/posts").on("child_added", (snapshot)=> {
            console.log("child.val: ", snapshot.child("message").val())
            setInput(input => [...input, snapshot.child("message").val()])
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

    return (
        <View>
            <FlatList data={input} renderItem={({item})=> {
                return (
                   <View style={styles.flatlist}>
                        <Text style={styles.text}>{userCredentials.name}</Text>
                        <Text style={styles.text}>{item}</Text>
                    </View> 
                )
            }} extraData={input} ItemSeparatorComponent={itemSeparator} keyExtractor={(item, index) => index.toString()}
/>
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({
    text: {
        fontSize: globalStyle.textFontSize,
    },
    flatlist: {
        backgroundColor: globalStyle.mainColorGreen,
        minWidth: 0,

    }
})

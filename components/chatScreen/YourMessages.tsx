import React, {useState, memo} from 'react'
import { StyleSheet, FlatList, View, Text, ListRenderItem } from 'react-native'

import firebase from 'firebase'
import "firebase/database"
import { useEffect } from 'react'
import globalStyle from '../../css/globalStyle'
import List from './List'

interface userObjectProp {
    userCredentials: {
        id: string,
        name: string,
    },
}

interface snap {
    id: string,
    message: string,
}



const YourMessages = ({userCredentials}: userObjectProp) => {


    const [input, setInput] = useState<Array<snap>>([])

    useEffect(()=> {
        firebase.database().ref("users/" + userCredentials.id + "/posts").on("child_added", (snapshot)=> {
            console.log("child: ", snapshot)
            setInput(input => [...input, {id: snapshot.child("id").val(), message: snapshot.child("message").val()}])
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
                    <View key={item.id}>
                        <Text style={styles.text}>{userCredentials.name}:</Text>
                        <List item={item}/>
                    </View>
                )
            }} extraData={input} ItemSeparatorComponent={itemSeparator}
/>
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({
    text: {
        fontSize: globalStyle.textFontSize,
    },
    
})

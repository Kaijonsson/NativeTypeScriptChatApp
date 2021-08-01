import React, {useState} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import firebase from 'firebase'
import "firebase/database"
import { useEffect } from 'react'
import globalStyle from '../../css/globalStyle'
import List from './List'



interface snap {
    id: string,
    message: string,
    name: string,
}

interface userObject {
    user: {
        name: string,
        id: string,
    }
}



const YourMessages = ({user}: userObject) => {

    const [input, setInput] = useState<Array<snap>>([])

    useEffect(()=> {
        firebase.database().ref("users/posts").on("child_added", (snapshot)=> {
            if(snapshot.exists()) {
                setInput(input => [...input, {id: snapshot.val().id, message: snapshot.val().message, name: snapshot.val().name}])
            }
        })
    }, [])

    const itemSeparator = () => {
        return (
          <View
            style={{
              height: globalStyle.elementPadding,
            }}
          />
        );
      };

    return (
        <View style={styles.listContainer}>
            <FlatList data={input} renderItem={({item})=> {
                return (
                    <View>
                        <List item={item} user={user}/>
                    </View>
                )
            }} extraData={input} ItemSeparatorComponent={itemSeparator} keyExtractor={(item, index) => index.toString()} 
/>
        </View>
    )
}

export default YourMessages

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
    
})

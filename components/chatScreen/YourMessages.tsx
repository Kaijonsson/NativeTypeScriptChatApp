import React, {useState, useEffect, createRef} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import firebase from 'firebase'

import globalStyle from '../../css/globalStyle'
import List from './List'



interface ArrayOfUserObject {
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

    const [input, setInput] = useState<Array<ArrayOfUserObject>>([])
    const flatListRef = createRef<FlatList>();

    
    useEffect(()=> {
        firebase.database().ref("posts").on("child_added", (snapshot)=> {
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

            <FlatList data={input} ref={flatListRef} onContentSizeChange={()=>flatListRef.current?.scrollToEnd({animated: true})} renderItem={({item})=> {
                return (
                        <List item={item} user={user}/>
                )
            }} extraData={input} ItemSeparatorComponent={itemSeparator} keyExtractor={(item, index) => index.toString()} 
/>
    )
}

export default YourMessages

const styles = StyleSheet.create({

})

import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

import globalStyle from "../../css/globalStyle"

import firebase from "firebase"
import "firebase/database"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


interface userMessageProp {
  userCredentials: {
    name: string,
  };
}

const SendText = ({userCredentials }: userMessageProp) => {

  const [input, setInput] = useState(String)


  const sendMessage = ()=> {
    setInput("")
    if(input === ""){
      console.log("no message")
    }else {
      
      firebase.database().ref("users/" + "/posts/").push({
        name: userCredentials.name,
        message: input,
      })
    }
  }

  return (
    <KeyboardAwareScrollView>

    <View style={styles.chatAndButton}>
    <TextInput onChangeText={setInput} value={input} style={styles.textInput} placeholder="Chat..."/>
    <TouchableOpacity onPress={sendMessage}>
      <View style={styles.button}>
        <Text style={styles.text}>Send</Text>
      </View>
    </TouchableOpacity>
</View>
    </KeyboardAwareScrollView>
  );
};

export default SendText;

const styles = StyleSheet.create({
  text: {
    fontSize: globalStyle.textFontSize,
    
  },
  button: {
    borderRadius: globalStyle.buttonBorderRadius,
    borderColor: globalStyle.mainColorGreen,
    borderStyle: "solid",
    borderWidth: globalStyle.standardBorderWidth,
    padding: globalStyle.elementPadding,
},
chatAndButton: {
  flexDirection: "row",
  minWidth: "95%",
  zIndex: 1,
  position: "relative",
},
textInput: {
    fontSize: globalStyle.textFontSize,
    borderColor: globalStyle.mainColorGreen,
    borderStyle: "solid",
    borderWidth: globalStyle.standardBorderWidth,
    padding: globalStyle.elementPadding,
    color: "black",
    borderRadius: globalStyle.buttonBorderRadius,
    flexGrow: 1,
    backgroundColor: "white",
},
});

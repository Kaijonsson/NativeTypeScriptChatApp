import React, {createRef, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

import globalStyle from "../../css/globalStyle"

import firebase from "firebase"

interface userMessageProp {
  userCredentials: {
    name: string,
    id: string,
  };
}

const SendText = ({userCredentials }: userMessageProp) => {

  const [input, setInput] = useState(String)

  const sendMessage = ()=> {
    setInput("")
    if(input === ""){
      console.log("no message")
    }else {
      
      firebase.database().ref("posts").push({
        name: userCredentials.name,
        message: input,
        id: userCredentials.id,
      })
    }
  }

  const inputRef = createRef<TextInput>()

  return (
    <View style={styles.chatAndButton}>
    <TextInput autoFocus={true} 
      ref={inputRef} 
      onChangeText={setInput} 
      value={input} 
      style={styles.textInput} 
      placeholder="Chat..."/>
    <TouchableOpacity onPress={sendMessage}>
      <View style={styles.button}>
        <Text style={styles.text}>Send</Text>
      </View>
    </TouchableOpacity>
</View>
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
    backgroundColor: globalStyle.mainBackgroundColor
},
chatAndButton: {
  flexDirection: "row",
  backgroundColor: globalStyle.mainBackgroundColor
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

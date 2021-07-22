import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import globalStyle from "../../css/globalStyle"

import firebase from "firebase"
import "firebase/database"

interface userMessageProp {
  userCredentials: {
    name: string,
  };
  message: String;
}

const SendText = ({ message, userCredentials }: userMessageProp) => {
  
  const sendMessage = ()=> {
    if(message === ""){
      console.log("no message")
    }else {
      
      firebase.database().ref("users/" + "/posts/").push({
        name: userCredentials.name,
        message: message,
      })
    }
  }

  return (
    <TouchableOpacity onPress={sendMessage}>
      <View style={styles.button}>
        <Text style={styles.text}>Send</Text>
      </View>
    </TouchableOpacity>
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
});

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import globalStyle from "../../css/globalStyle"

import firebase from "firebase"
import "firebase/database"

interface userMessageProp {
  userCredentials: {
    id: string,
  };
  message: String;
}

const SendText = ({ message, userCredentials }: userMessageProp) => {
  
  const sendMessage = ()=> {
    if(message === ""){
      console.log("no message")
    }else {

      const date = new Date();
      const timeStamp = date.toString().slice(0, 25);
      
      firebase.database().ref("users/" + userCredentials.id + "/posts/" + timeStamp.trim()).set({
        timeStamp: timeStamp,
        id: timeStamp,
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

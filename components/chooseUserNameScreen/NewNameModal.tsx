import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, TextInput} from 'react-native'

import globalStyle from '../../css/globalStyle'

const NewNameModal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const ModalHideOrShow = () => {

        if(modalVisible){
            return <View/>
        }else {

        return 
        }
    }


    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <TextInput style={styles.textStyle}/>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
    )
}

export default NewNameModal

const styles = StyleSheet.create({
    buttonOpen: {

    },
    buttonClose: {

    },
    button: {

    },
    centeredView: {
        borderRadius: globalStyle.buttonBorderRadius,
        borderStyle: "solid",
        borderWidth: globalStyle.standardBorderWidth,
        borderColor: globalStyle.mainColorGreen,
        padding: globalStyle.elementPadding,
        justifyContent: "center",
        alignItems: "center",

    },
    textStyle: {
        fontSize: globalStyle.textFontSize,
    },
    modalView: {

    },
    modalText: {

    },

})

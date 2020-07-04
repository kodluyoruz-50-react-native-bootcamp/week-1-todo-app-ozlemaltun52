import React from 'react';
import {SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles'

const Input = (props) =>{
    return(
      <SafeAreaView>
      <View style={styles.inputItem.container}>
          <View style={styles.inputItem.inputContainer}>
          <TextInput
          
            value={props.todoText}
            onChangeText={props.onEnterText}
          />
          </View>
          <TouchableOpacity style={styles.inputItem.buttonContainer} onPress={props.onOkay}>
              <Text style={{color: 'white'}}> Ekle </Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
}
 export {Input};
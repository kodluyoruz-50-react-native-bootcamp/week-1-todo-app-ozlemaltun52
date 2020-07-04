import React from 'react';
import {View, Text, Button, TouchableOpacity } from 'react-native';
 
import styles from '../styles';
 
const TodoItem = (props) => {
    return (
      
      <TouchableOpacity style={styles.todoItem.container} onPress={props.onSelect}>
        <Text style ={{color: 'white' , 
        fontSize:15, 
        textDecorationLine: props.isDone? "line-through": "none"
        }}>{props.todoData}</Text>
      </TouchableOpacity> 
    )
}

export {TodoItem}
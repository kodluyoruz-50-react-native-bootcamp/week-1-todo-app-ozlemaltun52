import React,{useState, useEffect} from 'react';
import {View, Text, Button, FlatList, SafeAreaView} from 'react-native';
 
import {Input, TodoItem} from './component/'

const TodoList = (props) => {
    const [todoList, setTodoList]= useState([])
    const [todoText, setTodoText]= useState("")

    const setText = (text) => {
        setTodoText(text)
    }

    const addTodo = () => {
        let newArray = [...todoList]
        newArray.push({todoName: todoText, isDone: false  })
        setTodoList (newArray)
    }

    function todoselect (id){
        let newArray= [...todoList]
        
        if (newArray[id].isDone==0)
         newArray[id].isDone = newArray[id].isDone+1
        else
         newArray.splice(id, 1)

        setTodoList(newArray)
    }
    
    const renderTodo = ({item, index}) => {
    return(
     <TodoItem todoData={item.todoName} isDone={item.isDone} onSelect={() => todoselect(index)}/>
     )
    }
    
   

    return(
        <SafeAreaView style = {{ flex:1, backgroundColor:"#283593" }}>
            <View style = {{ flex:1 }}>
                <FlatList
                keyExtractor={(_, index) => index.toString()}
                 data={todoList}
                 renderItem={renderTodo}
                 ItemSeparatorComponent={()=> <View style={{borderWidth:1, borderColor:'#673ab7'}}/> }
                />
                <Input
                todoText={todoText}
                onEnterText = {setText}
                onOkay={addTodo}
                />
            </View>
        </SafeAreaView>
    );
};
export default TodoList;

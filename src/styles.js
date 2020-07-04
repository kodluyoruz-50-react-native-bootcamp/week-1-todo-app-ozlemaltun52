import {StyleSheet, Dimensions} from 'react-native';


 const styles = {
     inputItem: StyleSheet.create({
         container:{
             padding:10,
             backgroundColor: "#283593"
             
         },
        inputContainer:{
            padding:10,
            backgroundColor: "#79B6cb"
        },
        buttonContainer:{
            padding:10,
            backgroundColor: "#3f51b5",
            margin:5,
            borderRadius:10,
            alignItems: "center"

        }
     }),
     todoItem: StyleSheet.create({
         container: {
             backgroundColor: "#512da8",
             padding: 10,
             
         }
     })

 }
 export default styles
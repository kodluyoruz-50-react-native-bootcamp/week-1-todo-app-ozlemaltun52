import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView
} from 'react-native'

const Main = () => {
  const [counter, setCounter] = useState(0)
  
  useEffect( () => {
    if (counter>5)
     console.log("Dikkat")
     else
     console.log("Yetersiz")

  }, [counter]

  )

  return(
   <SafeAreaView>
     <View>
       <Text>{counter}</Text>
       <Button title="güncelle" onPress={() =>setCounter(counter+1)}/>
     </View>
   </SafeAreaView>


  )
}
export default Main
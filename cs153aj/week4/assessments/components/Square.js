import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// this shows how to use a form
export default function Square(){
  const [num,setNum] = useState("0")  // state for TextInput element
  const [square, setSquare] = useState(0)
  return (
    <View>
      <View style={{flexDirection:"row"}}>
        <Text>number to square:</Text>
        <TextInput onChangeText={text => setNum(text)} />
        <Button title="Square it" onPress={()=>{
          const x = parseInt(num)
          setSquare(x*x)}} />
        <Text>squared number {square} </Text>
      </View>
    </View>
  );
}

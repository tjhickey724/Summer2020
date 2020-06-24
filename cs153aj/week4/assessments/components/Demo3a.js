import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// this shows how to use a form
export default function Demo3a(){
  const [name,setName] = useState("")  // state for TextInput element
  const [greeting, setGreeting] = useState("")
  return (
    <View>
      <View style={{flexDirection:"row"}}>
        <Text>name:</Text>
        <TextInput onChangeText={text => setName(text)} />
        <Button title="greet user" onPress={()=>setGreeting(`Hello ${name}`)} />
        <Text>{greeting} </Text>
      </View>
    </View>
  );
}

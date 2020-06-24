import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// this shows how to use a form
export default function Demo3(){
  const [name,setName] = useState("")
  const [greeting, setGreeting] = useState("")
  return (
    <View style={{margin:20, width:300}}>
      <View style={{flexDirection:"row"}}>
        <Text style={{margin:5}}>name:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setName(text)} />
      </View>
      <Button title="greet user" onPress={()=>setGreeting(`Hello ${name}`)} />
      <View>
        <Text style={{fontSize:40}}>{greeting} </Text>
      </View>
    </View>
  );
}

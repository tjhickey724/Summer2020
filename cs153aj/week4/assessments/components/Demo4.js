import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TextInput, View, Button } from 'react-native';

// this shows how to use a form
export default function Demo4(){
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [people, setPeople] = useState([])
  const addPerson = () => {
    const person = {name:name,age:age}
    setPeople(people.concat(person))
  }
  
  return (
    <View style={{margin:20, width:300}}>
      <PersonForm setName={setName} setAge={setAge} addPerson={addPerson} />
      <People people={people} />
    </View>
  );
}

function PersonForm({setName,setAge,addPerson}) {
  return (
    <View style={{backgroundColor:"#aaa"}}>
      <View style={{flexDirection:"row"}}>
          <Text style={{margin:5}}>name:</Text>
          <TextInput onChangeText={text => setName(text)} />
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={{margin:5}}>age:</Text>
        <TextInput onChangeText={text => setAge(text)} />
      </View>
      <Button title="add Person" onPress={addPerson} />
    </View>
  )
}

function People({people}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fca"}}>
          <FlatList
            data={people}
            renderItem={({ item }) => <Person name={item.name} age={item.age} />}
            keyExtractor={(item,index) => "person"+index}
          />
    </SafeAreaView>
  )

}

function Person({name,age}) {
  return (
    <View style={{flexDirection:"row",margin:10}}>
      <Text> {name} </Text>
      <Text> {age} </Text>
    </View>
  )
}

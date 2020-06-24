import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TextInput, View, Button } from 'react-native';

// this shows how to use a form and a FlatList
export default function Demo4(){

  // state variable holding list of people
  const [people, setPeople] = useState([])

  // function to add person to list of people
  const addPerson = (person) => {
    setPeople(people.concat(person))
  }

  return (
    <View style={{margin:20, width:300}}>
      <PersonForm addPerson={addPerson} />
      <People people={people} />
    </View>
  );
}



function PersonForm({addPerson}) {
  // state variables corresponding to form fields
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)

  const handleForm = () => {
    const person = {name:name,age:age}
    addPerson(person)
  }

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
      <Button title="add Person" onPress={handleForm} />
    </View>
  )
}



function People({people}) {
  return (
      <FlatList style={{backgroundColor:"#aaf"}}
        data={people}
        renderItem={({ item }) => <Person item={item} />}
        keyExtractor={(item,index) => "person"+index}
      />
  )
}

function Person({item}) {
  return (
    <View style={{flexDirection:"row",margin:10}}>
      <Text> {item.name} </Text>
      <Text> {item.age} </Text>
    </View>
  )
}

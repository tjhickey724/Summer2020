import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Demo1(){
  return (
    <View>
        <Listing name="Tim Hickey" email="tjhickey@brandeis.edu" />
        <Listing name="Pito Salas" email="pitosalas@brandeis.edu" />
    </View>
  );
}

function Listing({name,email}) {
  return (
        <Text> name: {name}  email: {email} </Text>
  );
}

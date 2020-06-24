import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Demo2(){
  return (
    <View>
        <Listing2 name="Tim Hickey" email="tjhickey@brandeis.edu" phone="62706"/>
        <Listing2 name="Pito Salas" email="pitosalas@brandeis.edu" phone="68733"/>
    </View>
  );
}

const Listing2 = ({name,email,phone}) => {
  return (
    <View style={{margin:10}} >
       <Text> name: {name} </Text>
       <Text> email:{email} </Text>
       <Text> phone:{phone} </Text>
    </View>
  );
}

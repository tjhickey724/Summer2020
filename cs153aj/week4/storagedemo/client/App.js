import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Counter from "./components/Counter"
import Counter0 from "./components/Counter0"
import CloudCounter from "./components/CloudCounter"
import CloudCounter0 from "./components/CloudCounter0"



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:36}}>Persistent Storage  Demo</Text>
      <Text style={{fontSize:12}}>
          This app shows how to implement a counter using three techniques:
          no storage, local storage, and cloud storage.
      </Text>
      <Text style={{fontSize:12}}>
          The main idea with local storage is to
          update the local storage each time the value is changed
          and to initialize the value with the useEffect function that will
          read the item from storage and set the local state to that value.
          Also, you need to use JSON.stringify/JSON.parse to convert between
          a Javascript object in the code and a string in the local storage.
      </Text>
      <Text style={{fontSize:12}}>
          The main idea with cloud storage is to update
          send an HTTP request to the server each time you read or update
          the counter variable.
      </Text>
      <Counter />
      <CloudCounter />
      <Text style={{fontSize:12}}>
           Hit both counters a few times and then reload the page on the web.
           Or kill the job and restart it on the phone (scanning the QR code again
           with your camera).  The counter with local state will be back to zero
           but the counter with local storage will have kept its value.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

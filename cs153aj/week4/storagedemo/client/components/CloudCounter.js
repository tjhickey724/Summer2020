import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
var uuid = require('react-native-uuid');

const realDeviceId = uuid.v4(); // this generates a unique ID for this device.

export default function CloudCounter() {
  const [value, setValue] = useState(0);
  const [deviceId,setDeviceId] = useState("1234")
  const [email, setEmail] = useState("anonymous@brandeis.edu");
  const [loggingIn,setLoggingIn] = useState(true)

  const localserverURL='http://localhost:3000'  // for local server
  const remoteserverURL = 'http://gracehopper.cs-i.brandeis.edu:3500'
  /*
    The next two functions use fetch to communicate with
    the webserver. They use the variable "deviceId" to keep
    distinguish between different users. For now, we use
    an unchecked email address as the deviceId.  Our next step
    would be to add google authentication to the server and then
    add a component to verify that the owner of this device
    is able to log in to the server with that email. We will
    do that next week... For now we work on the honor system
    to simplify coding...
  */
  const readItemFromCloud = async () => {
    //const item = await getItem();
    console.log("about to read item from Cloud: deviceId="+deviceId)
    const item = await fetch(`${remoteserverURL}/get`,{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'counterDemo',
        deviceId: deviceId,
      })
    })
    const itemParsed = await item.json()
    console.log(`item = ${itemParsed}`)
    const v = parseInt(itemParsed) || 0
    setValue(v)
    console.log(`just set value to ${v}, now value=${value}`)
    //setValue(JSON.parse(item));
  };

  const writeItemToCloud = async newValue => {
    //await setItem(JSON.stringify(newValue));

    await fetch(`${remoteserverURL}/store`,{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'counterDemo',
        deviceId: deviceId,
        value: newValue
      })
    });

    setValue(newValue);
  };

  const incrementStoredValue = () => {
    writeItemToCloud(value+1)
    }

  const initStoredValue = () => {
    writeItemToCloud(0)
  }

  const logIn = () => {
    setDeviceId(email)
    //readItemFromCloud()
    setLoggingIn(false)
  }

  useEffect(() => {
    readItemFromCloud();
  }, [deviceId,loggingIn]);

  let view = ""
  if (loggingIn) {
    view =
        <View style={{margin:10,backgroundColor:"#bbb"}}>
          <Text style={{margin:20}}>
              Login:
              <TextInput style={{margin:2, backgroundColor:"#fff"}}
                 onChangeText = {
                   text => {setEmail(text)}}
                 value = {email}
              />
          </Text>
          <Button onPress={logIn} style={{margin:5}} title="connect to server" />
        </View>
  } else {
    view =
       <View style={{margin:10}}>
          <Button onPress={incrementStoredValue} style={{margin:5}} title="increment" />
          <Text style={{backgroundColor:"#aaa",margin:5}}> {value} </Text>
          <View style={{margin:5}} >
            <Button onPress={initStoredValue} style={{margin:5}} title="reset" />
          </View>
          <View style={{margin:5}} >
            <Button onPress={() => setLoggingIn(true)} style={{margin:5}} title="Log out" />
          </View>
       </View>
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24}}>This Counter Uses DB-backed Cloud Storage</Text>
      {view}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

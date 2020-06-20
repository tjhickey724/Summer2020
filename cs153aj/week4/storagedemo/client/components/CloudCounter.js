import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
var uuid = require('react-native-uuid');

//const deviceId = "1234";

export default function CloudCounter() {
  const [value, setValue] = useState(0);
  const [deviceId,setDeviceId] = useState("1234")
  const [email, setEmail] = useState("???@brandeis.edu");
  const [loggingIn,setLoggingIn] = useState(true)

  const readItemFromStorage = async () => {
    //const item = await getItem();
    console.log("about to read item from storage: deviceId="+deviceId)
    const item = await fetch("http://localhost:3000/get",{
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

  const writeItemToStorage = async newValue => {
    //await setItem(JSON.stringify(newValue));

    await fetch("http://localhost:3000/store",{
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
    writeItemToStorage(value+1)
    }

  const initStoredValue = () => {
    writeItemToStorage(0)
  }

  const logIn = () => {
    setDeviceId(email)
    //readItemFromStorage()
    setLoggingIn(false)
  }

  useEffect(() => {
    readItemFromStorage();
  }, [deviceId,loggingIn]);

  let view = ""
  if (loggingIn) {
    view =
        <View style={{margin:10}}>
          <Text>
              Login:
              <TextInput
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
          <Text> {value} </Text>
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
      <Text>This Counter Uses DB-backed Cloud Storage</Text>
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

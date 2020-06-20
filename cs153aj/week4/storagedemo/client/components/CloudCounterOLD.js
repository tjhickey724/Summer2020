import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
var uuid = require('react-native-uuid');

const deviceId = "1234";

export default function CloudCounterOLD() {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [loggingIn,setLoggingIn] = useState(true)

    const readItemFromCloud = async () => {
      //const item = await getItem();
      if (loggingIn) return;
      const item = await fetch("http://localhost:3000/get",{
        method:"POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: 'counterDemo',
          deviceId: email,
        })
      })
      const itemParsed = await item.json()
      console.log(`item = ${itemParsed}`)
      setValue(parseInt(itemParsed))
    };

    const writeItemToCloud = async newValue => {

      await fetch("http://localhost:3000/store",{
        method:"POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: 'counterDemo',
          deviceId: email,
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

    const loadStoredValue = () => {
      readItemFromCloud()
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })

    const logIn = () => {
      readItemFromCloud()
      setLoggingIn(false)
    }

/*
  useEffect(() => {
    readItemFromCloud();
  }, [loggingIn]);
*/
  return
    <>
        <View style={styles.container}>
          <Text>This Counter Uses DB-backed Cloud Storage</Text>
          <View style={{margin:10}}>
            <Text>
                Email address:
                <TextInput
                   onChangeText = {
                     text => {setEmail(text)}}
                   value = {email}
                />
            </Text>
            <Text> {email} </Text>
            <Button onPress={logIn} title="connect to server" />
          </View>
        </View>
    </>
    /*
        <View style="styles.container">
            <View style="margin:10">
              <Button onPress={incrementStoredValue} title="press" />
              <Text> {value} </Text>
              <Button onPress={initStoredValue} title="reset" />
              <Button onPress={loadStoredValue} title="load stored value" />
            </View>
        </View>
    </>
    */

}

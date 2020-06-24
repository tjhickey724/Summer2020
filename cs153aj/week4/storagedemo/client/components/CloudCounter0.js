import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
var uuid = require('react-native-uuid');

const deviceId = "tjhickey@brandeis.edu";

export default function CloudCounter0() {
  const [value, setValue] = useState(0);

  const readItemFromStorage = async () => {
    //const item = await getItem();

    const item = await fetch("http://gracehopper.cs-i.brandeis.edu:3500/get",{
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
    setValue(parseInt(itemParsed))
    //setValue(JSON.parse(item));
  };

  const writeItemToStorage = async newValue => {
    //await setItem(JSON.stringify(newValue));

    await fetch("http://gracehopper.cs-i.brandeis.edu:3500/store",{
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

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This Counter Uses DB-backed Cloud Storage</Text>
      <Button onPress={incrementStoredValue} title="press" />
      <Text> {value} </Text>
      <Button onPress={initStoredValue} title="reset" />
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

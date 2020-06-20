import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage';


export default function Counter() {
  const [value, setValue] = useState(0);
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(JSON.parse(item));
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const incrementStoredValue = () => {
    writeItemToStorage(value+1)
    }

  const initStoredValue = () => {
    writeItemToStorage(0)
  }



  return (
    <View style={styles.container}>
      <Text style={{fontSize:24}}>This Counter Uses AsyncStorage</Text>
      <Button onPress={incrementStoredValue} title="increment" />
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

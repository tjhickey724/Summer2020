import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Counter0() {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(value+1)
    }

  const initStoredValue = () => {
    setValue(0)
  }

  return (
    <View style={styles.container}>
      <Text>This counter has no persistent storage</Text>
      <Button onPress={incrementValue} title="press" />
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

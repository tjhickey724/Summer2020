import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const bios = [
  {name:"Tim",age:64},
  {name:"Caitlin",age:25},
]

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            name:"xz",
            age:19,
          });
        }}
      />
      <Button
        title="Go to About"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('About');
        }}
      />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      {bios.map(bio => (
        <Button
          title={"Go to bio for "+bio.name}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', bio);
          }}
        />
      ))}

    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(name)}</Text>
      <Text>otherParam: {JSON.stringify(age)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

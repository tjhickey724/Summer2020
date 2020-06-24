import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import Demo3 from './components/Demo3'
import Demo4 from './components/Demo4'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile} />
        <Stack.Screen
          name="Demo1"
          component={Demo1} />
        <Stack.Screen
          name="Demo2"
          component={Demo2} />
        <Stack.Screen
          name="Demo3"
          component={Demo3} />
        <Stack.Screen
          name="Demo4"
          component={Demo4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, title }) {
  return (
    <View>
        <Text> {title} </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
        <Button
          title="Go to Tim's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Tim' })
          }
        />
        <Button
          title="Go to Demo1"
          onPress={() =>
            navigation.navigate('Demo1')
          }
        />
        <Button
          title="Go to Demo2"
          onPress={() =>
            navigation.navigate('Demo2')
          }
        />
        <Button
          title="Go to Demo3"
          onPress={() =>
            navigation.navigate('Demo3')
          }
        />
        <Button
          title="Go to Demo4"
          onPress={() =>
            navigation.navigate('Demo4')
          }
        />
    </View>
  );
}

function Profile({ navigation, route }) {
  const {name} = route.params
  return (
    <View>
        <Text> Name: {name} </Text>
        <Button
          title="Go home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
    </View>
  );
}





const styles = StyleSheet.create({

  listing: {
    backgroundColor: '#aaa',
    borderWidth: 2,
    borderColor: '#f00',
    margin:10,
    padding:5,
    width:300,
  }
});

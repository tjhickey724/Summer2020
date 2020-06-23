import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



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

function Demo1(){
  return (
    <View>
        <Listing name="Tim Hickey" email="tjhickey@brandeis.edu" />
        <Listing name="Pito Salas" email="pitosalas@brandeis.edu" />
    </View>
  );
}

function Listing({name,email}) {
  return (

        <Text> name: {name}  email: {email} </Text>

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

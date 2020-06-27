import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import Demo3 from './components/Demo3'
import Demo3a from './components/Demo3a'
import Demo4 from './components/Demo4'
import Square from './components/Square'
import CovidAPI from './components/CovidAPI'
import ShoppingTesting from './components/ShoppingTesting'

const demos =
 [
   {name:'Home',component:HomeScreen},
   {name:'Demo1',component:Demo1},
   {name:'Demo2',component:Demo2},
   {name:'Demo3',component:Demo3},
   {name:'Demo3a',component:Demo3a},
   {name:'Demo4',component:Demo4},
   {name:'Square',component:Square},
   {name:'CovidAPI',component:Demo3},
   {name:'ShoppingTesting', component:ShoppingTesting},
 ]

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
        name="Demo1"
        component={Demo1} />
      <Stack.Screen
        name="Demo2"
        component={Demo2} />
      <Stack.Screen
        name="Demo3"
        component={Demo3} />
      <Stack.Screen
        name="Demo3a"
        component={Demo3a} />
      <Stack.Screen
        name="Demo4"
        component={Demo4} />
      <Stack.Screen
        name="Square"
        component={Square} />
      <Stack.Screen
          name="CovidAPI"
          component={CovidAPI} />
      <Stack.Screen
          name="ShoppingTesting"
          component={ShoppingTesting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, title }) {
  return (
    <View>
        <Text> {title} </Text>
        <FlatList
          data={demos}
          renderItem={({ item }) =>
            <Button
               title={`go to ${item.name}`}
               onPress = {() =>
                   {console.log(item.name);navigation.navigate(item.name)}}
            />}
          keyExtractor={(item,index) => "button"+index}
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

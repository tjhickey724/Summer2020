import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TextInput, View, Button } from 'react-native';

const ShoppingListDemo = () => {
  const [foods,setFoods] = useState([])

  const addItem = (item) => {
        setFoods(foods.concat(item))
    }

  return (
    <View>
       <ShoppingListForm addItem={addItem}/>
       <ShopingList foods={foods} />
    </View>
  )
}

export default Shopp

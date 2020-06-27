import React,{useState} from 'react';
import {Text, View} from 'react-native';

const ShoppingItem = ({name, price}) => {
  return (
   <View style={{margin:10}}>
     <Text> Item:  {name} Price: {price} </Text>
   </View>
  );
}

export default ShoppingItem

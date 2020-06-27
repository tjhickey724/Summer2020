import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TextInput, View, Button } from 'react-native';
import ShoppingItem from "./ShoppingItem";

const ShoppingTesting = () => {
  return (
    <ShoppingItem name="apple" price="0.25" />
  )
}

export default ShoppingTesting

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerText}>
      About this app
      </Text>
      <Image
        source={require('../assets/images/timhickey.jpeg')}
        style={styles.welcomeImage}
      />
      <Text style={{fontSize:20,marginTop:40}}>
      Tim Hickey
         <Text style={{fontSize:12}}>
         Tim is a Professor of Computer Science
         at Brandeis University. He received his
         BA in Mathematics from Brandeis, his MS and PhD
         in Mathematics from University of Chicago,
         and he has been on the Computer Science Faculty
         at Brandeis since 1984.
         </Text>
      </Text>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerText: {
    fontSize: 35,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  welcomeImage: {
    width: 300,
    height: 168,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
    marginBottom:40,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

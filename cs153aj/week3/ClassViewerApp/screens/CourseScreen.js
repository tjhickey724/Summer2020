import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState,useEffect} from 'react';
import { TextInput, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Course from '../components/Course';

let data = require('../assets/json/courses.json')
data = data.filter(x => ((!x.independent_study) && (x.term==="1202")))
data.sort((a,b) => b.enrolled-a.enrolled)
let theData = data.filter(x => (x.coursenum === "164A"))
console.log(`data.length=${data.length}`)

export default function CourseScreen() {
   const [selectedData,setSelectedData] = useState(theData)
   const [subject, setSubject] = React.useState('COSI');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

     <Text style={styles.headerText}>
      Brandeis Courses
      </Text>
      <View style={{margin:10}}>
        <Text>
            Subject:
        <TextInput
           onChangeText = {text => setSubject(text)}
           value = {subject}
        />
        </Text>
      </View>

      <View style={{width:250}}>
        <Button title="Show Courses"
           onPress={() => setSelectedData(data.filter(x => x.subject===subject))}
        />
      </View>


      <FlatList
         style={{margin:20}}
         data={selectedData}
         keyExtractor={(item,index) => index}
         renderItem={({ item }) =>
           <Course course={item} />
         }
         />
         <Text>
            data.length = {data.length}

            selectedData[0] = {JSON.stringify(selectedData[0],null,2)}
         </Text>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    margin:20,
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

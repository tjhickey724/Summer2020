
import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

let term = (num) => {
  switch (num) {
    case "1193": return "Fall 2019"; break;
    case "1201": return "Spring 2020"; break;
    case "1202": return "Summer 2020"; break;
    case "1203": return "Fall 2020"; break;
  }
  return num
}


export default function Course({course}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
      {course.subject} {course.coursenum}:{course.name} in {term(course.term)}  enrolled:{course.enrolled}
       }
      </Text>
      <Text style={{fontSize:14,marginBottom:5}}>
        {course.instructor.join(" ")}
      </Text>
      <Text style={{fontSize:12}}>
        {course.description}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    backgroundColor: '#fafafa',
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom:10,
    backgroundColor: 'white'
  },
  contentContainer: {
    paddingTop: 15,
    backgroundColor: "yellow"
  },
});

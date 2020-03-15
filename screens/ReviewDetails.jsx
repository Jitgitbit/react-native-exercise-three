import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetails({navigation}) {
  // const pressHandler = () => {
  //   navigation.goBack(); // does the same as .push !!
  //   // navigation.push('ReviewDetails');
  // }
  return (
    <View style={globalStyles.container}>
      {/* <Text>ReviewDetails Screen</Text>
      <Button title='go to overview' onPress={pressHandler}/> */}
      <Text>title: {navigation.getParam('title')}</Text>
      <Text>review: {navigation.getParam('body')}</Text>
      <Text>rating: {navigation.getParam('rating')}</Text>
    </View>
  )
}

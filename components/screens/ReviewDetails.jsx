import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { globalStyles, images } from '../../styles/global'
import Card from '../shared/Card'

export default function ReviewDetails({navigation}) {
  // const pressHandler = () => {
  //   navigation.goBack(); // does the same as .push !!
  //   // navigation.push('ReviewDetails');
  // }
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        {/* <Text>ReviewDetails Screen</Text>
        <Button title='go to overview' onPress={pressHandler}/> */}
        <Text>title: {navigation.getParam('title')}</Text>
        <Text>review: {navigation.getParam('body')}</Text>
        {/* <Text>rating: {navigation.getParam('rating')}</Text> */}
        <View style={styles.rating}>
          <Text>MovieZone rating: </Text>
          <Image source={images.ratings[rating]}/> 
        </View>
      </Card>
    </View>
  )
}

import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../shared/Card'

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {title:'Maverick', rating:5, body:'not bad', key:'1'},
    {title:'Good Midnight', rating:6, body:'not too bad', key:'2'},
    {title:'Lord of the Rings', rating:7, body:'too long', key:'3'}
  ])
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails'); // does the same as .push !!
  //   // navigation.push('ReviewDetails');
  // }
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='go to review details' onPress={pressHandler}/> */}
      <FlatList
      data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

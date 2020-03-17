import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, Modal } from 'react-native'
import { globalStyles } from '../../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../shared/Card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    {title:'Maverick', rating:2, body:'not bad', key:'1'},
    {title:'Good Midnight', rating:3, body:'not too bad', key:'2'},
    {title:'Lord of the Rings', rating:4, body:'too long', key:'3'}
  ])
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails'); // does the same as .push !!
  //   // navigation.push('ReviewDetails');
  // }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
          name='close'
          size={24}
          style={{ ...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
          />
          <ReviewForm/>
        </View>
      </Modal>
      <MaterialIcons
      name='add'
      size={24}
      style={styles.modalToggle}
      onPress={() => setModalOpen(true)}
      />
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

const styles = StyleSheet.create({
  modalContent:{
    flex:1,
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  }
})
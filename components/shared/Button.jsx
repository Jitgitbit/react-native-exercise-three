import React from 'react'
import { View, StyleSheet, TouchableOpacityComponent } from 'react-native'


export default function Button(text, pressHandler) {
  return (
    <TouchableOpacityComponent onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacityComponent>
  )
}

const styles = StyleSheet.create({
  button:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71'
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center'
  }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:44,
  },
  titleText:{
    fontFamily:'nunito-bold',
    fontSize:24
  }
})
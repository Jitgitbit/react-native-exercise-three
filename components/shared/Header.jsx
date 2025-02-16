import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import { AuthSession } from 'expo';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer()
  };
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu}/>
      <View style={styles.headerTitle}>
        <Image source={require('../../assets/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1,
    // marginLeft:70              // -----> little trick to frustrate juniors: switch this to paddingLeft and it will be unpressable !!! HA HA !!
  },
  icon:{
    position:'absolute',
    left:-50,
    marginLeft:5,
  },
  headerTitle:{
    flexDirection:'row',
  },
  headerImage:{
    width:26,
    height:26,
    marginHorizontal:10,
  }
})
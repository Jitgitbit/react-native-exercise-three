import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import React from 'react'
import Header from "../shared/Header";

const screens = {
  About:{
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About MovieZone'/>     // essential for passing navigation, it has to be a return !!!
      }
      // headerStyle:{
      //   backgroundColor: '#eee'
      // }
    }                           
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'yellow'
    },
    headerTintColor:'darkblue',
  }
});

export default AboutStack;
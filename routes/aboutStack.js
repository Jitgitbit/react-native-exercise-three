import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import React from 'react'
import Header from "../shared/Header";

const screens = {
  About:{
    screen: About,
    navigationOptions:{
      headerTitle:() => <Header/>
    }                           
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'yellow'
    },
    headerTintColor:'darkblue'
  }
});

export default AboutStack;
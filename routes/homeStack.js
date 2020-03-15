import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
// import {createAppContainer} from 'react-navigation';
import React from 'react'
import Header from "../shared/Header";

const screens = {
  Home:{
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='MovieZone'/>     // essential for passing navigation, it has to be a return !!!
      }
      // headerStyle:{
      //   backgroundColor: '#eee'
      // }
    }                           // SEQUENCE MATTERS !!!!!
  },
  ReviewDetails:{
    screen: ReviewDetails,
    navigationOptions:{
      title:'Review Details',
      // headerStyle:{
      //   backgroundColor: '#eee'
      // }
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'yellow'
    },
    headerTintColor:'darkblue'
  }
});

export default HomeStack;
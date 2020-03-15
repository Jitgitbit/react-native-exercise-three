import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/screens/Home";
import ReviewDetails from "../components/screens/ReviewDetails";
// import {createAppContainer} from 'react-navigation';
import React from 'react'
import Header from "../components/shared/Header";

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
      backgroundColor:'yellow',
    },
    // headerTintColor:'darkblue',
    headerTitleAlign:'center'
  }
});

export default HomeStack;
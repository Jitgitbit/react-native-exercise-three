import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import {createAppContainer} from 'react-navigation';

const screens = {
  Home:{
    screen: Home,
    navigationOptions:{
      title:'MovieZone'
    }                           // SEQUENCE MATTERS !!!!!
  },
  ReviewDetails:{
    screen: ReviewDetails,
    navigationOptions:{
      title:'Review Details'
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)
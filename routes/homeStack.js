import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import {createAppContainer} from 'react-navigation';

const screens = {
  Home:{
    screen: Home,
    navigationOptions:{
      title:'MovieZone',
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

export default createAppContainer(HomeStack)
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home:{
    screen: Home
  },
  ReviewDetails:{
    screen: ReviewDetails
  }
}

const homeStack = createStackNavigator(screens);
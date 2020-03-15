import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";

const screens = {
  About:{
    screen: About,
    navigationOptions:{
      title:'About MovieZone',
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
import React, {useState} from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'nunito-regular' : require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
  'nunito-bold' : require('./assets/fonts/Nunito/Nunito-Bold.ttf')
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Home/>
    );
  }else{}
}
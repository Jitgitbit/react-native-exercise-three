import React from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';

export default function App() {

  const getFonts = () => Font.loadAsync({
      'nunito-regular' : require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
      'nunito-bold' : require('./assets/fonts/Nunito/Nunito-Bold.ttf')
    })

  return (
    <Home/>
  );
}
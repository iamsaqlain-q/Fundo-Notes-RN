import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
import Providers from './src/navigations';
import AppNavigation from './src/navigations/AppNavigation';

const App = () => {

  return (
    <Providers />
  )
  
};
export default App;

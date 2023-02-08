import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import AddNotes from '../screens/AddNotes';
import SearchNotes from '../screens/SearchNotes';
import AddLabelsToNote from '../screens/AddLabelsToNote';
import DataChart from '../screens/DataChart';
import SourceCode from '../screens/SourceCode';
import GeoLocation from '../screens/GeoLocation';
import AddFormulae from '../screens/AddFormulae';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="AddNotes"
        component={AddNotes}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SearchNotes"
        component={SearchNotes}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="AddLabelsToNote"
        component={AddLabelsToNote}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="DataChart"
        component={DataChart}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SourceCode"
        component={SourceCode}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="GeoLocation"
        component={GeoLocation}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="AddFormulae"
        component={AddFormulae}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

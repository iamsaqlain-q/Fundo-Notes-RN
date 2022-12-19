import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import AddNotes from '../screens/AddNotes';
import SearchNotes from '../screens/SearchNotes';

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
    </Stack.Navigator>
  );
};

export default AppNavigation;

import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddNotes from '../screens/AddNotes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    </Stack.Navigator>
  );
};

export default AppNavigation;

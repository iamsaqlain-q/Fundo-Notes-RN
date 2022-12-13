import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Reminder from '../screens/Reminder';
import Labels from '../screens/Labels';
import Archive from '../screens/Archive';
import Trash from '../screens/Trash';
import Settings from '../screens/Settings';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#52c2f5',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <Ionicons name="bulb-outline" size={20} style={{color: '#fff'}} />
            ),
          }}
        />
        <Drawer.Screen
          name="Reminder"
          component={Reminder}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="notifications-outline"
                size={20}
                style={{color: '#fff'}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Labels"
          component={Labels}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="pricetag-outline"
                size={20}
                style={{color: '#fff'}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Archive"
          component={Archive}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="archive-outline"
                size={20}
                style={{color: '#fff'}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Trash"
          component={Trash}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="trash-outline"
                size={20}
                style={{color: '#fff'}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="settings-outline"
                size={20}
                style={{color: '#fff'}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
  );
};
export default DrawerNavigation;

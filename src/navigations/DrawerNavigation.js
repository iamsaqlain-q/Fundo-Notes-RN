import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NotesScreen from '../screens/NotesScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReminderScreen from '../screens/ReminderScreen';
import LabelsScreen from '../screens/LabelsScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import TrashScreen from '../screens/TrashScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer independent={true}>
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
          name="Notes"
          component={NotesScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="bulb-outline" size={20} style={{color: '#fff'}} />
            ),
          }}
        />
        <Drawer.Screen
          name="Reminder"
          component={ReminderScreen}
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
          component={LabelsScreen}
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
          component={ArchiveScreen}
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
          component={TrashScreen}
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
          component={SettingsScreen}
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
    </NavigationContainer>
  );
};
export default DrawerNavigation;

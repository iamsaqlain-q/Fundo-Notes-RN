import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Reminder from '../screens/Reminder';
import Archive from '../screens/Archive';
import Trash from '../screens/Trash';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import CreateLabel from '../screens/CreateLabel';
import DrawerLabels from '../screens/DrawerLabels';
import TaskManager from '../screens/TaskManager';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.mainColor,
        },
        headerShown: false,
        drawerActiveBackgroundColor: Colors.drawerActive,
        drawerActiveTintColor: Colors.white,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 15,
          fontWeight: 'bold',
          color: Colors.white,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="bulb-outline"
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
            />
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
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="DrawerLabels"
        component={DrawerLabels}
        options={{header: () => null}}
      />

      <Drawer.Screen
        name="Create new label"
        component={CreateLabel}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="add-outline"
              size={Sizes.normalBtn}
              style={{color: Colors.white, marginRight: -5}}
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
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
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
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
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
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="TaskManager"
        component={TaskManager}
        options={{
          drawerIcon: () => (
            <Icons
              name="file-document-edit-outline"
              size={Sizes.smallBtn}
              style={{color: Colors.white}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;

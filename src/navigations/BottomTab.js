import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AddImageScreen from '../screens/AddImageScreen';
import AddNotesScreen from '../screens/AddNotesScreen';
import CheckListScreen from '../screens/CheckListScreen';
import PaintScreen from '../screens/PaintScreen';
import VoiceInputScreen from '../screens/VoiceInputScreen';

const Tab = createBottomTabNavigator();

const AddNotesButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -50,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        borderColor: '#fff',
        borderRadius: 17,
        marginRight: 10,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarIcon: () => null,
        tabBarStyle: {
          backgroundColor: '#97e5fb',
          height: 60,
          width: 360,
        },
      }}>
      <Tab.Screen
        name="CheckList"
        component={CheckListScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name="checkbox-outline" size={25} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Paint"
        component={PaintScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name="brush-outline" size={25} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="VoiceInput"
        component={VoiceInputScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name="mic-outline" size={25} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddImage"
        component={AddImageScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name="image-outline" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddNotes"
        component={AddNotesScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="plus"
              size={35}
              style={{color: '#97e5fb'}}
            />
          ),
          tabBarButton: props => <AddNotesButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

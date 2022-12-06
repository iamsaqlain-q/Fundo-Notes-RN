import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckList from '../screens/CheckList';
import Paint from '../screens/Paint';
import VoiceInputScreen from '../screens/VoiceInputScreen';
import AddImage from '../screens/AddImage';
import AddNotes from '../screens/AddNotes';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();


export const AddNotesButton = ({onPress, navigation}) => (

  <TouchableOpacity
    style={{
      top: -40,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={() => onPress()}
   >
    <View
      style={{
        borderColor: '#f2f2f2',
        borderRadius: 20,
        marginRight: 30,
        width: 70,
        height: 70,
        borderWidth: 9,
        backgroundColor: '#97e5fb',
      }}
      >
    <FontAwesome5
              name="plus"
              size={30}
              style={{color: '#fff'}}
            />
    </View>
  </TouchableOpacity>
);

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarIcon: () => null,
        tabBarStyle: {
          backgroundColor: '#97e5fb',
          height: 50,
          width: 360,
        },
      }}>
      <Tab.Screen
        name="CheckList"
        component={CheckList}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -10}}>
              <Ionicons name="checkbox-outline" size={25}  style={{color: '#fff'}} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Paint"
        component={Paint}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -40}}>
              <Ionicons name="brush-outline" size={25}  style={{color: '#fff'}} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="VoiceInput"
        component={VoiceInputScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -60}}>
              <Ionicons name="mic-outline" size={25}  style={{color: '#fff'}} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddImage"
        component={AddImage}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -90}}>
              <Ionicons name="image-outline" size={25} style={{color: '#fff'}} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

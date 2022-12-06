import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomBar = ({onPress}) => {
  console.log('Hello');
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#97e5fb',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
        }}>
        <Ionicons name="checkbox-outline" size={25} style={{color: '#fff'}} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 30,
        }}>
        <Ionicons name="brush-outline" size={25} style={{color: '#fff'}} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 30,
        }}>
        <Ionicons name="mic-outline" size={25} style={{color: '#fff'}} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 30,
        }}>
        <Ionicons name="image-outline" size={25} style={{color: '#fff'}} />
      </View>

      <TouchableOpacity
        style={{
          top: -45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <View
          style={{
            borderColor: '#f2f2f2',
            borderRadius: 20,
            width: 70,
            height: 70,
            borderWidth: 9,
            backgroundColor: '#97e5fb',
            marginLeft: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name="plus" size={30} style={{color: '#fff'}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

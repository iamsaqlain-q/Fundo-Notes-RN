import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';

const CustomDrawer = props => {
  return (
    <View style={styles.nameContainer}>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>Fun-Do Notes</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#97e5fb'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    backgroundColor: '#97e5fb',
  },
  nameView: {
    justifyContent: 'flex-start',
    marginTop: 20,
    padding: 15,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

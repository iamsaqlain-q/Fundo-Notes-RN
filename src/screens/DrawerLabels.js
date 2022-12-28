import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomBar from '../components/BottomBar';
import DrawerLabelsTop from '../components/DrawerLabelsTop';

const DrawerLabels = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <DrawerLabelsTop />
      </View>
      <View style={styles.notesContainer}>
        <Icon name="label-outline" size={100} color="#97e5fb"/>
        <Text style={{color: '#97e5fb'}}>No notes with this label yet</Text>
      </View>
      <View style={styles.bottomBarContainer}>
        <BottomBar />
      </View>
    </View>
  );
};

export default DrawerLabels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  topBar: {
    flex: 1,
    padding: 15,
  },
  notesContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomBarContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
});

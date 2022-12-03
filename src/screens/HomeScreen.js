import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomTab from '../navigations/BottomTab';
import SearchBar from '../components/SearchBar';
import DrawerNavigation from '../navigations/DrawerNavigation';

const HomeScreen = () => {
  return (
   // <DrawerNavigation />
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.drawerContainer}>
        <DrawerNavigation />
      </View>
      <View style={styles.bottomBarContainer}>
        <BottomTab />
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  searchBarContainer: {
    flex: 1,
    padding: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  bottomBarContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  drawerContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

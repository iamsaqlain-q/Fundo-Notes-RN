import React from 'react';
import {View, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
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
    padding: 20,
    height: '100%',
  },
  searchBarContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

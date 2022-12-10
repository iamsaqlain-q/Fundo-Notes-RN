import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Notes from './Notes';
import BottomBar from '../components/BottomBar';

const Home = ({navigation}) => {
  const goToNotes = () => {
    navigation.navigate('AddNotes');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.notesContainer}>
        <Notes />
      </View>
      <View style={styles.bottomBarContainer}>
        <BottomBar
          onPress={() => {
            goToNotes();
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  notesContainer: {
    flex: 13,
    padding: 20,
    height: 500,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  bottomBarContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
});

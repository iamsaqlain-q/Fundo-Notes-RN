import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Notes from './Notes';
import BottomBar from '../components/BottomBar';

const Home = ({navigation}) => {
  const [toggleLayout, setToggleLayout] = useState(false);
  const goToNotes = () => {
    navigation.navigate('AddNotes');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          toggleLayout={toggleLayout}
          setToggleLayout={setToggleLayout}
          onPress={() => {
            setToggleLayout(!toggleLayout);
          }}
        />
      </View>
      <View style={styles.notesContainer}>
        <Notes
          navigation={navigation}
          toggleLayout={toggleLayout}
          setToggleLayout={setToggleLayout}
        />
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
    paddingHorizontal: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
  notesContainer: {
    flex: 13,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  bottomBarContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
});

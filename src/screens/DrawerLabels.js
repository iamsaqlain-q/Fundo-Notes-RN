/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomBar from '../components/BottomBar';
import DrawerLabelsTop from '../components/DrawerLabelsTop';
import NoteCard from '../components/NoteCard';
import {useUid} from '../hooks/useUid';
import {fetchNotesWithLabels} from '../services/LabelsServices';

const DrawerLabels = ({route, navigation}) => {
  //console.log('DrawerLabels', route.params);
  const [labelData, setLabelData] = useState([]);
  const userId = useUid();
  const labelId = route.params?.id;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNotesWithLabels();
    });
    return unsubscribe;
  }, [navigation]);

  const getNotesWithLabels = async () => {
    let data = await fetchNotesWithLabels(userId, labelId).then(item =>
      item.map(note => note.noteData),
    );
    setLabelData(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <DrawerLabelsTop label={route.params?.label} />
      </View>
      <View style={styles.noteCard}>
        <FlatList
          numColumns={1}
          //key={item => item.id}
          data={labelData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <View style={styles.notesContainer}>
        <Icon name="label-outline" size={100} color="#97e5fb" />
        <Text style={{color: '#97e5fb'}}>No notes with this label yet</Text>
      </View> */}
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

  noteCard: {
    flex: 13,
    padding: 15,
  },
});

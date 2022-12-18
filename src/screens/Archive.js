import React from 'react';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigations/AuthProvider';
import {fetchNote} from '../services/NotesServices';
import ArchiveTopBar from '../components/ArchiveTopBar';
import NoteCard from '../components/NoteCard';
import {useNavigation} from '@react-navigation/native';

const Archive = () => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);
  const navigation = useNavigation();

  const getArchiveNotes = async () => {
    const notes = await fetchNote(user.uid);
    let archiveNotes = [];
    notes.forEach(data => {
      if (data.isInArchive) {
        archiveNotes.push(data);
      }
    });
    setNoteData(archiveNotes);
  };

  useEffect(() => {
    getArchiveNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToEditNotes = ({item}) => {
    navigation.navigate('AddNotes', {
      editdata: item,
      id: item.id,
      isInArchive: item.isInArchive,
    });
  };

  return (
    <View style={styles.archiveContainer}>
      <View style={{flex: 1}}>
        <ArchiveTopBar />
      </View>
      <View style={styles.listStyle}>
        <FlatList
          data={noteData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                goToEditNotes({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default Archive;

const styles = StyleSheet.create({
  archiveContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  listStyle: {
    flex: 13,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

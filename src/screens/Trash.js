import React from 'react';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigations/AuthProvider';
import {fetchNote} from '../services/NotesServices';
import NoteCard from '../components/NoteCard';
import {useNavigation} from '@react-navigation/native';
import TrashTopBar from '../components/TrashTopBar';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

const Trash = () => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);
  const navigation = useNavigation();

  const getTrashNotes = async () => {
    const notes = await fetchNote(user.uid);
    let trashNotes = [];
    notes.forEach(data => {
      if (data.isInTrash) {
        trashNotes.push(data);
      }
    });
    setNoteData(trashNotes);
  };

  useEffect(() => {
    getTrashNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToEditNotes = ({item}) => {
    navigation.navigate(Strings.addNotesScreen, {
      editdata: item,
      id: item.id,
      isInTrash: item.isInTrash,
    });
  };

  return (
    <View style={styles.trashContainer}>
      <View style={{flex: 1}}>
        <TrashTopBar />
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
export default Trash;

const styles = StyleSheet.create({
  trashContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.lightWhite,
  },

  listStyle: {
    flex: 13,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

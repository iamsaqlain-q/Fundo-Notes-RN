import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import NoteCard from '../components/NoteCard';
import {fetchNote} from '../services/NotesServices';
import {useUid} from '../hooks/useUid';

const Notes = ({navigation}) => {
  const [notesObj, setNotesObj] = useState([]);
  const userId = useUid();

  const getNotes = async () => {
    let noteData = await fetchNote(userId);
    setNotesObj(noteData);
  };

  useEffect(() => {
    getNotes();
  });

  const goToEditNotes = ({item}) => {
    navigation.navigate('AddNotes', {editdata: item, id: item.id});
  };
  return (
    <View>
      <FlatList
        data={notesObj}
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
      {/* {notesObj.map(item => (
          <TouchableOpacity key={item.id} onPress={() => {}}>
          <NoteCard {...item} />
          </TouchableOpacity>
        ))} */}
    </View>
  );
};
export default Notes;

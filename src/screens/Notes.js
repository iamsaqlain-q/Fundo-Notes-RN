import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';
import NoteCard from '../components/NoteCard';
import {fetchNote} from '../services/NotesServices';
import {useUid} from '../hooks/useUid';

const Notes = ({navigation}) => {
  const [otherNotes, setOtherNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const userId = useUid();

  const getNotes = async () => {
    let noteData = await fetchNote(userId);
    let pinned = [];
    let unPinned = [];
    noteData.forEach(data => {
      if (data.isPinned && !data.isInArchive && !data.isInTrash) {
        pinned.push(data);
      } else if (!data.isPinned && !data.isInArchive && !data.isInTrash) {
        unPinned.push(data);
      }
    });
    setPinnedNotes(pinned);
    setOtherNotes(unPinned);
    //setNotesObj(noteData);
  };
  //console.log('Pinned Data', pinnedNotes);
  //console.log('Others Data', otherNotes);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToEditNotes = ({item}) => {
    navigation.navigate('AddNotes', {
      editdata: item,
      id: item.id,
      isPinned: item.isPinned,
    });
  };

  const DATA = [
    {
      title: 'Pinned',
      data: pinnedNotes,
    },

    {
      title: 'Others',
      data: otherNotes,
    },
  ];
  return (
    <View>
      {/* <FlatList
        data={pinnedNotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              goToEditNotes({item});
            }}>
            <NoteCard {...item} />
          </TouchableOpacity>
        )}
      /> */}

      <SectionList
        sections={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          //console.log('Item', item);
          return (
            <TouchableOpacity
              onPress={() => {
                goToEditNotes({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={styles.listText}>{section.title}</Text>
          </View>
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

const styles = StyleSheet.create({
  listText: {
    color: '#4ebef4',
    marginVertical: 7,
    fontWeight: 'bold',
  },
});

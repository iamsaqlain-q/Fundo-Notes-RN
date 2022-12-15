import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, SectionList} from 'react-native';
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
      if (data.isPinned && !data.isInArchive) {
        pinned.push(data);
      } else if (!data.isPinned && !data.isInArchive) {
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
  });

  const goToEditNotes = ({item}) => {
    navigation.navigate('AddNotes', {editdata: item, id: item.id});
  };
  return (
    <View>
      <FlatList
        data={otherNotes}
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

{/* <SectionList
        sections={otherNotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              goToEditNotes({item});
            }}>
            <NoteCard {...item} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({section})=>(
          <View>
            <Text>
              {section.pinnedNotes}
            </Text>
          </View>
        )}
      /> */}

      {/* {notesObj.map(item => (
          <TouchableOpacity key={item.id} onPress={() => {}}>
          <NoteCard {...item} />
          </TouchableOpacity>
        ))} */}
    </View>
  );
};
export default Notes;

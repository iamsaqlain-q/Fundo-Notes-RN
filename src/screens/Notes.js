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

const Notes = ({navigation, toggleLayout}) => {
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
    const unsubscribe = navigation.addListener('focus', () => {
      getNotes();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const goToEditNotes = ({item}) => {
    navigation.navigate('AddNotes', {
      editdata: item,
      id: item.id,
      // isPinned: item.isPinned,
    });
  };

  // const DATA = [
  //   {
  //     title: 'Pinned',
  //     data: pinnedNotes,
  //   },

  //   {
  //     title: 'Others',
  //     data: otherNotes,
  //   },
  // ];

  const PinnedNotesFlatList = () => {
    return (
      <View>
        <Text style={styles.listText}>
          {pinnedNotes.length > 0 ? 'Pinned' : ''}
        </Text>
        <FlatList
          numColumns={toggleLayout ? 2 : 1}
          key={toggleLayout ? 2 : 1}
          data={pinnedNotes}
          keyExtractor={item => item.id}
          ListFooterComponent={<OtherNotesFlatList />}
          renderItem={({item}) => (
            <TouchableOpacity
              style={toggleLayout ? styles.gridLayout : styles.listLayout}
              onPress={() => {
                goToEditNotes({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const OtherNotesFlatList = () => {
    return (
      <View>
        <Text style={styles.listText}>Others</Text>
        <FlatList
          numColumns={toggleLayout ? 2 : 1}
          key={toggleLayout ? 2 : 1}
          data={otherNotes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={toggleLayout ? styles.gridLayout : styles.listLayout}
              onPress={() => {
                goToEditNotes({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <View>
      <View>
        <FlatList
          numColumns={toggleLayout ? 2 : 1}
          key={toggleLayout ? 2 : 1}
          //data={pinnedNotes}
          keyExtractor={item => item.id}
          ListHeaderComponent={<PinnedNotesFlatList />}
          renderItem={({item}) => (
            <TouchableOpacity
              style={toggleLayout ? styles.gridLayout : styles.listLayout}
              onPress={() => {
                goToEditNotes({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* <SectionList
        sections={DATA}
        //numColumns={toggleLayout ? 2 : 1}
        //key={toggleLayout ? 2 : 1}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          //console.log('Item', item);
          return (
            <TouchableOpacity
              style={toggleLayout ? styles.gridLayout : styles.listLayout}
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

const styles = StyleSheet.create({
  listText: {
    color: '#4ebef4',
    marginVertical: 7,
    fontWeight: 'bold',
  },

  listLayout: {
    width: '100%',
  },

  gridLayout: {
    width: '49%',
    marginRight: '1%',
  },
});

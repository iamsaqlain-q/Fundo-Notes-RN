import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import NoteCard from '../components/NoteCard';
import {fetchNote} from '../services/NotesServices';
import {useUid} from '../hooks/useUid';
import Colors from '../constants/Colors';

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
  };

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
      noteId: item.id,
      labelData: item.labelData,
    });
  };

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
    </View>
  );
};
export default Notes;

const styles = StyleSheet.create({
  listText: {
    color: Colors.backColor,
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

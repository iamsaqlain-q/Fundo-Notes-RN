import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LabelModal from '../components/LabelModal';
import {AuthContext} from '../navigations/AuthProvider';
import {createNote, editNote} from '../services/NotesServices';

const AddNotes = ({navigation, route}) => {
  const noteData = route.params;
  const [title, setTitle] = useState(noteData?.editdata?.title || '');
  const [description, setDescription] = useState(
    noteData?.editdata?.description || '',
  );
  const [isPinned, setIsPinned] = useState(
    noteData?.editdata?.isPinned || false,
  );
  const [isInArchive, setIsInArchive] = useState(
    noteData?.editData?.isInArchive || false,
  );
  const [isInTrash, setIsInTrash] = useState(
    noteData?.editdata?.isInTrash || false,
  );
  const [showModal, setShowModal] = useState(false);
  const {user} = useContext(AuthContext);
  const handleBackPress = async () => {
    let userId = user.uid;
    let noteId = route.params?.id;
    if (noteId) {
      await editNote(
        title,
        description,
        userId,
        noteId,
        isPinned,
        isInArchive,
        isInTrash,
      );
    } else {
      await createNote(
        title,
        description,
        userId,
        isPinned,
        isInArchive,
        isInTrash,
      );
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowItems}>
        <View style={styles.leftArrrow}>
          <TouchableOpacity
            onPress={() => handleBackPress(isPinned, isInArchive, isInTrash)}>
            <Icons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsPinned(!isPinned);
            }}>
            <Icons
              name={isPinned ? 'pin' : 'pin-outline'}
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsInTrash(!isInTrash);
            }}>
            <Icons
              name={isInTrash ? 'trash-can' : 'trash-can-outline'}
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsInArchive(!isInArchive);
            }}>
            <Icons
              name={
                isInArchive
                  ? 'archive-arrow-down'
                  : 'archive-arrow-down-outline'
              }
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputBox}>
        <View>
          <TextInput
            placeholder="Title"
            style={{fontSize: 25}}
            multiline
            value={title}
            onChangeText={input => setTitle(input)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Note"
            style={{fontSize: 20}}
            multiline
            value={description}
            onChangeText={input => setDescription(input)}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <Icons name="palette-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <Text>Edited 11:00 PM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Icons name="dots-vertical" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <LabelModal setShowModal={setShowModal} showModal={showModal}/>
      </View>
    </View>
  );
};
export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97e5fb',
  },

  topRowItems: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  leftArrrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },

  topRightIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  inputBox: {
    flex: 1,
    paddingHorizontal: 15,
  },

  bottomContainer: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  bottomIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

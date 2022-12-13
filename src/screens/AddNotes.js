import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../navigations/AuthProvider';
import {createNote, editNote} from '../services/NotesServices';

const AddNotes = ({navigation, route}) => {
  //console.log('Route', route.params?.editdata?.title);
  //const noteId = route.params.id;
  //console.log('Note Data:', noteId);
  const [title, setTitle] = useState(route.params?.editdata?.title || '');
  const [description, setDescription] = useState(
    route.params?.editdata?.description || '',
  );
  const {user} = useContext(AuthContext);

  const handleBackPress = async () => {
    let userId = user.uid;
    let noteId = route.params.id;
    //console.log('Note Id :', noteId);
    if (noteId) {
      await editNote(title, description, userId, noteId);
    } else {
      await createNote(title, description, userId, noteId);
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowItems}>
        <View style={styles.leftArrrow}>
          <TouchableOpacity onPress={() => handleBackPress()}>
            <Icons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity>
            <Icons name="pin-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity>
            <Icons name="bell-plus-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity>
            <Icons name="archive-arrow-down-outline" size={25} color="#fff" />
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
          <TouchableOpacity>
            <Icons name="dots-vertical" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
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

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleInput = value => {
    setTitle({title: value});
  };

  const handleNoteInput = value => {
    setDescription({description: value});
  };

  const handleCreateNote = () => {
    let data = {
      title: setTitle(title),
      desciption: setDescription(description),
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowItems}>
        <View style={styles.leftArrrow}>
          <TouchableOpacity onPress={() => handleCreateNote()}>
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
            style={{fontSize: 22}}
            multiline
            value={title}
            onChangeText={input => handleTitleInput(input)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Note"
            style={{fontSize: 18}}
            multiline
            value={description}
            onChangeText={input => handleNoteInput(input)}
          />
        </View>
      </View>
    </View>
  );
};
export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
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
});

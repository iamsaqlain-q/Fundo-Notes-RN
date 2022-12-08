import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {createNote} from '../navigations/AuthProvider';
//import createNote from '../services/UserServices';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigations/AuthProvider';

const AddNotes = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {user} = useContext(AuthContext);

  const createNewNote = () => {
    firestore()
      .collection('Notes')
      .add({
        userId: user.uid,
        title: title,
        description: description,
      })
      .then(() => {
        console.log('Note Created!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCreateNote = () => {
    let data = {
      title: title,
      description: description,
    };
    createNewNote(data);

    navigation.navigate('Notes');
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
});

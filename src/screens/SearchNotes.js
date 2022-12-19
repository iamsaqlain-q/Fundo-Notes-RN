import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchNotes = () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchTopBar}>
        <View style={{marginTop: 10}}>
          <Ionicons name="arrow-back" size={25} />
        </View>
        <View>
          <TextInput
            value={value}
            onChangeText={text => setValue(text)}
            autoFocus={true}
            placeholder="Search your notes"
            placeholderTextColor="#f2f2f2"
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchNotes;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  searchTopBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#97e5fb',
    padding: 10,
  },

  textInput: {
    fontSize: 17,
    height: 50,
    marginLeft: 10,
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NotesScreen = () => {
  return (
    <View>
      <Text style={styles.text}>NotesScreen</Text>
    </View>
  );
};
export default NotesScreen;

const styles = StyleSheet.create({
  text: {
    marginTop: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AddNotesScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AddNotesScreen</Text>
    </View>
  );
};
export default AddNotesScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

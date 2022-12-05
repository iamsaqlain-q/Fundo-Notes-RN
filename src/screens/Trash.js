import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Trash = () => {
  return (
    <View>
      <Text style={styles.text}>TrashScreen</Text>
    </View>
  );
};
export default Trash;

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

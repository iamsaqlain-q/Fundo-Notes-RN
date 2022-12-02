import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AddImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AddImageScreen</Text>
    </View>
  );
};
export default AddImageScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

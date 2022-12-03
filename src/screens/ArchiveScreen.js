import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ArchiveScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ArchiveScreen</Text>
    </View>
  );
};
export default ArchiveScreen;

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

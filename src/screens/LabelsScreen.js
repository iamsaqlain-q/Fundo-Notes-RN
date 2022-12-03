import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LabelsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>LabelsScreen</Text>
    </View>
  );
};
export default LabelsScreen;

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

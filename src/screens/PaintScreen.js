import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PaintScreen = () => {
  return (
    <View>
      <Text style={styles.text}>PaintScreen</Text>
    </View>
  );
};
export default PaintScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

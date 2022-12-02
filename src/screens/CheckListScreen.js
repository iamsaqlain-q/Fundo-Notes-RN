import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CheckListScreen = () => {
  return (
    <View>
      <Text style={styles.text}>CheckListScreen</Text>
    </View>
  );
};
export default CheckListScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

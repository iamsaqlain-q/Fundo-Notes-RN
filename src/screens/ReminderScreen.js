import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ReminderScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ReminderScreen</Text>
    </View>
  );
};
export default ReminderScreen;

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

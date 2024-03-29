import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const Reminder = () => {
  return (
    <View>
      <Text style={styles.text}>ReminderScreen</Text>
    </View>
  );
};
export default Reminder;

const styles = StyleSheet.create({
  text: {
    marginTop: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.lightGrey,
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );
};
export default Settings;

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

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const VoiceInputScreen = () => {
  return (
    <View>
      <Text style={styles.text}>VoiceInputScreen</Text>
    </View>
  );
};
export default VoiceInputScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ccc',
  },
});

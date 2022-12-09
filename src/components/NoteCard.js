import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NoteCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text styte={styles.titleStyle}>title</Text>
      </View>
      <View>
        <Text styte={styles.descriptionStyle}>description</Text>
      </View>
    </View>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    backgroundColor: '#97e5fb',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NoteCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.descriptionStyle}>{props.description}</Text>
      </View>
    </View>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 60,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#97e5fb',
    padding: 5,
    marginBottom: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#999',
  },
  descriptionStyle: {
    fontSize: 15,
    color: '#999',
  },
});

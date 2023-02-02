import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import Colors from '../constants/Colors';

const NoteCard = props => {
  const labelsData = props.labelData || [];
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.descriptionStyle}>{props.description}</Text>
      </View>
      <View style={styles.chipContainer}>
        {labelsData.map((label, index) => (
          <Chip key={label.id} style={{margin: 3}}>
            {label.label}
          </Chip>
        ))}
      </View>
    </View>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: Colors.lightWhite,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.backColor,
    padding: 5,
    marginBottom: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.backColor,
  },
  descriptionStyle: {
    fontSize: 15,
    color: Colors.backColor,
  },
  chipContainer: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

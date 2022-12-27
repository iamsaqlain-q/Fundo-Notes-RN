import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

const NoteCard = props => {
  const labelsData = props.labelData || [];
 // console.log('LabelsData', labelsData);
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.descriptionStyle}>{props.description}</Text>
      </View>
      <View style={{margin: 5, flexDirection: 'row'}}>
        {labelsData.map((label, index) => (
          <Chip key={label.id}>{label.label}</Chip>
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
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4ebef4',
    padding: 5,
    marginBottom: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4ebef4',
  },
  descriptionStyle: {
    fontSize: 15,
    color: '#4ebef4',
  },
});

import React,{useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fetchNote} from '../services/NotesServices';
import { useUid } from '../hooks/useUid';

const NoteCard = ({navigation}) => {
  const uid = useUid();

  useEffect(() => {
    fetchNote(uid);
    console.log(uid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text styte={styles.titleStyle}>{uid}</Text>
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

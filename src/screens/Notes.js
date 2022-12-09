import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NoteCard from '../components/NoteCard';

const Notes = props => {
  return (
 <View>
  <ScrollView>
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  <NoteCard />
  </ScrollView>
 </View>
  );
};
export default Notes;

const styles = StyleSheet.create({
});

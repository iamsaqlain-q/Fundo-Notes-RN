import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NoteCard from '../components/NoteCard';
import {fetchNote} from '../services/NotesServices';
import { useUid } from '../hooks/useUid';

const Notes = () => {
 const uid = useUid();

  useEffect(() => {
    fetchNote(uid);
    console.log(uid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <ScrollView>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        {/* <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard /> */}
      </ScrollView>
    </View>
  );
};
export default Notes;

const styles = StyleSheet.create({});

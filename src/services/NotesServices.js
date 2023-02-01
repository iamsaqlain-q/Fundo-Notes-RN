import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('UserData');

export const createNote = async (
  title,
  description,
  userId,
  isPinned,
  isInArchive,
  isInTrash,
  labelData,
  reminderData,
  noteId,
) => {
  try {
    await database.doc(userId).collection('NoteData').doc(noteId).set({
      title: title,
      description: description,
      isPinned: isPinned,
      isInArchive: isInArchive,
      isInTrash: isInTrash,
      labelData: labelData,
      reminderData: reminderData,
    });
    console.log('Note Created!');
  } catch (e) {
    console.log(e);
  }
};

export const fetchNote = async userId => {
  const notesArray = [];
  const notesCollection = await firestore()
    .collection('UserData')
    .doc(userId)
    .collection('NoteData')
    .get();
  // console.log('Total users:', notesCollection.size);
  notesCollection.forEach(documentSnapshot => {
    const data = documentSnapshot.data();
    data.id = documentSnapshot.id;
    //console.log('Note Data:', documentSnapshot.data());
    //console.log('New Data:', data);
    notesArray.push(data);
  });
  return notesArray;
};

export const editNote = async (
  title,
  description,
  userId,
  noteId,
  isPinned,
  isInArchive,
  isInTrash,
  labelData,
) => {
  try {
    await database.doc(userId).collection('NoteData').doc(noteId).update({
      title: title,
      description: description,
      isPinned: isPinned,
      isInArchive: isInArchive,
      isInTrash: isInTrash,
      labelData: labelData,
    });
    console.log('Note Updated!');
  } catch (e) {
    console.log(e);
  }
};

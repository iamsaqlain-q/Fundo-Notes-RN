import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('UserData');

export const createNote = async (title, description, userId) => {
  try {
    await database
      .doc(userId)
      .collection('NoteData')
      .add({
        title: title,
        description: description,
      })
      .then(() => {
        console.log('Note Created!');
      });
  } catch (e) {
    console.log(e);
  }
};

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

export const fetchNote = async userId => {
  const querySnapshot = await firestore()
    .collection('UserData')
    .doc(userId)
    .collection('NoteData')
    .get();
  console.log('Total data: ', querySnapshot.size);

  querySnapshot.forEach(documentSnapshot => {
    console.log('Note ID: ', documentSnapshot.id, documentSnapshot.data());
  });
};

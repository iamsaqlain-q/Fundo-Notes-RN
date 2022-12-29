import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('UserData');

export const addLabelsToNotes = async (userId, noteId, labelId, noteData) => {
  try {
    await database
      .doc(userId)
      .collection('LabelData')
      .doc(labelId)
      .collection('NoteId')
      .add({
        noteData: noteData,
      });
  } catch (e) {
    console.log(e);
  }
};

export const createNewLabel = async (label, userId) => {
  try {
    await database.doc(userId).collection('LabelData').add({
      label: label,
    });
    console.log('Label Created');
  } catch (e) {
    console.log(e);
  }
};

export const fetchNotesWithLabels = async (userId, labelId) => {
  const notesWithLabels = [];
  try {
    const notesWithLabelsArray = await database
      .doc(userId)
      .collection('LabelData')
      .doc(labelId)
      .collection('NoteId')
      .get();

    notesWithLabelsArray.forEach(documentSnapshot => {
      const data = documentSnapshot.data();
      data.id = documentSnapshot.id;
      notesWithLabels.push(data);
    });
    //console.log('......', notesWithLabels);
    return notesWithLabels;
  } catch (e) {
    console.log(e);
  }
};

export const fetchLabel = async userId => {
  const labelsArray = [];
  try {
    const labelsCollection = await database
      .doc(userId)
      .collection('LabelData')
      .get();

    labelsCollection.forEach(documentSnapshot => {
      const data = documentSnapshot.data();
      data.id = documentSnapshot.id;
      labelsArray.push(data);
      //console.log('LabelsArray', labelsArray);
    });
    return labelsArray;
  } catch (e) {
    console.log(e);
  }
};

export const editLabel = async (labelName, userId, labelId) => {
  try {
    await database.doc(userId).collection('LabelData').doc(labelId).update({
      label: labelName,
    });
    console.log('Label Updated!');
  } catch (e) {
    console.log(e);
  }
};

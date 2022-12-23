import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('UserData');

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
    });
    return labelsArray;
  } catch (e) {
    console.log(e);
  }
};

export const editLabel = async (labelName, userId, labelId) => {
  try {
    await database.doc(userId).collection('LabelData').doc(labelId).update({
      labelName: labelName,
    });
    console.log('Label Updated!');
  } catch (e) {
    console.log(e);
  }
};

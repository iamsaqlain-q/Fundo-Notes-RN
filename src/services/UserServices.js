import React, {useContext} from 'react';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigations/AuthProvider';

const UserServices = ({data}) => {
  const {user} = useContext(AuthContext);

  const createNote = () => {
    firestore()
      .collection('Notes')
      .add({
        userId: user.uid,
        title: data.title,
        description: data.description,
      })
      .then(() => {
        console.log('Note Created!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return <View></View>;
};
export default UserServices;

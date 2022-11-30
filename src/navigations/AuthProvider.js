/* eslint-disable no-alert */
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signup: async (email, password, errorCallback) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            errorCallback(e.code);
            console.log(e);
          }
        },

        signin: async (email, password, errorCallback) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            errorCallback(e.code);
            console.log(e);
          }
        },

        signout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },

        forgetPassword: (email, errorCallback) => {
          auth()
            .sendPasswordResetEmail(email)
            .then(() => {
              alert('Email sent');
            })
            .catch(e => {
              alert(e);
            });
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

/* eslint-disable no-alert */
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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

        googleSignin: async () => {
          try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (e) {
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

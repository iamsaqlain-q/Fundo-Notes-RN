/* eslint-disable no-alert */
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const userCollection = firestore().collection('UserData');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signup: async (firstName, lastName, email, password, errorCallback) => {
          try {
            const userDetails = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            await userCollection
              .doc(userDetails.user.uid)
              .set({firstName, lastName, email});
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

        fbSignin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log(e);
          }
        },

        signin: async (email, password, errorCallback) => {
          try {
            const userData = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            console.log(userData);
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

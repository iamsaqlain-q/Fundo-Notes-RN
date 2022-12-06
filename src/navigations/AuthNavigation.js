/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '44314285798-q1chrjjt7tt15jb6llkmn48n4edcrkmd.apps.googleusercontent.com',
    });
  }, []);
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={({navigation}) => ({
            title: ' ',
          })}
        />

        <Stack.Screen
          name="Forgotpassword"
          component={ForgotPassword}
          options={({navigation}) => ({
            title: ' ',
          })}
        />
      </Stack.Navigator>
  );
};

export default AuthNavigation;

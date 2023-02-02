/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Strings from '../constants/Strings';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Strings.webId,
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

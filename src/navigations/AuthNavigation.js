/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '44314285798-q1chrjjt7tt15jb6llkmn48n4edcrkmd.apps.googleusercontent.com',
    });
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={({navigation}) => ({
            title: ' ',
          })}
        />

        <Stack.Screen
          name="Forgotpassword"
          component={ForgotPasswordScreen}
          options={({navigation}) => ({
            title: ' ',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

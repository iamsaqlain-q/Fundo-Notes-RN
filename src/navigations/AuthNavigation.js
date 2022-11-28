import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name='SignIn'
                    component={SignInScreen}
                    options={{ header: () => null }}
                />

                <Stack.Screen
                    name='Signup'
                    component={SignUpScreen}
                    options={({ navigation }) => ({
                        title: ' '
                    })}
                />

                <Stack.Screen
                    name='Forgotpassword'
                    component={ForgotPasswordScreen}
                    options={({ navigation }) => ({
                        title: ' '
                    })}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AuthNavigation;
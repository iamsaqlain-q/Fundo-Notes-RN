import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {

    return (
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{ header: () => null }}
                />

            </Stack.Navigator>
    )
}

export default AppNavigation;
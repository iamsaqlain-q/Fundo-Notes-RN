import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigations/AuthProvider';

const HomeScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton buttonTitle="Sign Out" onPress={() => signout()} />
        </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9fafd",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333',
    }
});
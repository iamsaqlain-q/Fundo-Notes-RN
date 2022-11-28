import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigations/AuthProvider';


const SignUpScreen = ({ navigation }) => {

    const setError = (code) => {
        console.log('This is from sign up screen', code);
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const { signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create An Account</Text>
            <FormInput
                labelValue={firstName}
                onChangeText={(userName) => setFirstName(userName)}
                placeholderText='First Name'
                iconType="user"
                keyboardType='email-address'
            />

            <FormInput
                labelValue={lastName}
                onChangeText={(userName) => setLastName(userName)}
                placeholderText='Last Name'
                iconType="user"
                keyboardType='email-address'
            />


            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText='Email'
                iconType="mail"
                keyboardType='email-address'
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText='Password'
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText='Confirm Password'
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => signup(email, password, setError)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => alert('Terms & Conditions')}>
                <Text style={styles.terms}>By clicking Sign Up,
                    you are accepting our</Text>
                <Text style={styles.conditions}>Terms & Conditions</Text>
            </TouchableOpacity>

        </View>
    )
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        fontFamily: 'italic',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#51C1F6'
    },
    terms: {
        fontSize: 11,
        marginTop: 15,
        color: '#808080',
    },
    conditions: {
        fontSize: 11,
        marginTop: 5,
        alignSelf: 'center',
        color: '#FF6347',
    },
});
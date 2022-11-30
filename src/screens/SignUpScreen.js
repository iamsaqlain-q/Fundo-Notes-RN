import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigations/AuthProvider';


const SignUpScreen = ({ navigation }) => {

    const handleCheckEmail = (text) => {
        let regexMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
        setEmail(text)

        if (regexMail.test(text)) {
            setCheckValidEmail(false);
        }
        else {
            setCheckValidEmail(true);
        }
    }

    const handleCheckPassword = (text) => {
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        setPassword(text)

        if (regexPassword.test(text)) {
            setCheckValidPassword(false);
        }
        else {
            setCheckValidPassword(true);
        }
    }

    const handleError = (code) => {
        setError(code);
        console.log(code);
    }
    const [checkValidPassword, setCheckValidPassword] = useState("");
    const [checkValidEmail, setCheckValidEmail] = useState("");
    const [error, setError] = useState();
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
                onChangeText={(text) => handleCheckEmail(text)}
                placeholderText='Email'
                iconType='mail'
                keyboardType='email-address'
            />

            {checkValidEmail ?
                (<Text style={styles.validtext}>Please enter a valid E-mail</Text>) :
                (<Text></Text>)}

            <FormInput
                labelValue={password}
                onChangeText={(text) => handleCheckPassword(text)}
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
            />

            {checkValidPassword ?
                (<Text style={styles.validtext}>Please enter a valid password</Text>) :
                (<Text></Text>)}

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText='Confirm Password'
                iconType="lock"
                secureTextEntry={true}
            />

            <Text style={styles.errorText}>{error}</Text>
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => signup(email, password, handleError)}
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
    bottomspace: {
        marginBottom: 10,
    },
    text: {
        fontFamily: 'italic',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#8bd91d'
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
    errorText: {
        fontSize: 13,
        color: 'red',
    },
    validtext: {
        fontSize: 13,
        color: 'red',
        alignSelf: 'flex-end',
    }
});
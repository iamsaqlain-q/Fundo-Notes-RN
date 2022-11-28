import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Set New Password</Text>

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
                placeholderText='Old Password'
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={newPassword}
                onChangeText={(userPassword) => setNewPassword(userPassword)}
                placeholderText='New Password'
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Submit"
                onPress={() => alert('New Password Is Set')}
            />

        </View>
    )
}
export default ForgotPasswordScreen;

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
});
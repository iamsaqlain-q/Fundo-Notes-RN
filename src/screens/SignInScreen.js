import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { AuthContext } from '../navigations/AuthProvider';

const SignInScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hidePass, setHidePass] = useState(false);
    const [checkValidEmail, setCheckValidEmail] = useState("");
    const [checkValidPassword, setCheckValidPassword] = useState("");

    const {signin} = useContext(AuthContext);

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

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Fun-Do Notes</Text>
            <FormInput
                labelValue={email}
                onChangeText={(text) => handleCheckEmail(text)}
                placeholderText='Email'
                iconType='user'
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
                secureTextEntry={!hidePass}
            />

            {checkValidPassword ?
                (<Text style={styles.validtext}>Please enter a valid password</Text>) :
                (<Text></Text>)}

            <View style={styles.showPass}>
                <CheckBox
                    disabled={false}
                    value={hidePass}
                    onValueChange={() => setHidePass(!hidePass)}
                    tintColors={{ true: '#51C1F6', false: 'black' }}
                />
                <Text style={styles.showPassText}>Show Password</Text>
            </View>

            <FormButton
                buttonTitle="Sign In"
                onPress={() => signin(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Forgotpassword')}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't Have Any Account? Create One</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        height: 150,
        width: 150,
    },
    text: {
        fontFamily: 'italic',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#51C1F6'
    },
    forgotButton: {
        marginVertical: 10,
    },
    navButtonText: {
        fontSize: 17,
        marginTop: 15,
        color: '#2e64e5',
    },
    showPass: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: -25
    },
    showPassText: {
        marginTop: 9,
        fontSize: 11,
        color: '#666',
    },
    validtext: {
        fontSize: 13,
        color: 'red',
        alignSelf: 'flex-end',
    }
});
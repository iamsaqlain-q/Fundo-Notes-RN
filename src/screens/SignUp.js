/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigations/AuthProvider';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

const SignUp = ({navigation}) => {
  const handleCheckEmail = text => {
    let regexMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    setEmail(text);

    if (regexMail.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleCheckPassword = text => {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setPassword(text);

    if (regexPassword.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  const handleError = code => {
    setError(code);
    console.log(code);
  };
  const [checkValidPassword, setCheckValidPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState('');
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const {signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create An Account</Text>
      <FormInput
        labelValue={firstName}
        onChangeText={userName => setFirstName(userName)}
        placeholderText={Strings.firstName}
        iconType="user"
        keyboardType="email-address"
      />

      <FormInput
        labelValue={lastName}
        onChangeText={userName => setLastName(userName)}
        placeholderText={Strings.lastName}
        iconType="user"
        keyboardType="email-address"
      />

      <FormInput
        labelValue={email}
        onChangeText={text => handleCheckEmail(text)}
        placeholderText={Strings.email}
        iconType="mail"
        keyboardType="email-address"
      />

      {checkValidEmail ? (
        <Text style={styles.validtext}>Please enter a valid E-mail</Text>
      ) : (
        <Text> </Text>
      )}

      <FormInput
        labelValue={password}
        onChangeText={text => handleCheckPassword(text)}
        placeholderText={Strings.password}
        iconType="lock"
        secureTextEntry={true}
      />

      {checkValidPassword ? (
        <Text style={styles.validtext}>Please enter a valid password</Text>
      ) : (
        <Text> </Text>
      )}

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <Text style={styles.errorText}>{error}</Text>
      <FormButton
        buttonTitle="Sign Up"
        onPress={() =>
          signup(firstName, lastName, email, password, handleError)
        }
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('Terms & Conditions')}>
        <Text style={styles.terms}>
          By clicking Sign Up, you are accepting our
        </Text>
        <Text style={styles.conditions}>Terms & Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bottomspace: {
    marginBottom: 10,
  },
  text: {
    fontFamily: 'italic',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.navBtnTwo,
  },
  terms: {
    fontSize: 11,
    marginTop: 15,
    color: Colors.terms,
  },
  conditions: {
    fontSize: 11,
    marginTop: 5,
    alignSelf: 'center',
    color: Colors.conditions,
  },
  errorText: {
    fontSize: 13,
    color: Colors.red,
  },
  validtext: {
    fontSize: 13,
    color: Colors.red,
    alignSelf: 'flex-end',
  },
});

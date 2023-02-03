/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigations/AuthProvider';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import stringsOfLanguages from '../utility/Localization/Translation';

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
  const toggle = useSelector(state => state.toggle);

  const {signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {toggle
          ? stringsOfLanguages._props.en.createanewccount
          : stringsOfLanguages._props.urdu.createanewccount}
      </Text>
      <FormInput
        labelValue={firstName}
        onChangeText={userName => setFirstName(userName)}
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.firstname
            : stringsOfLanguages._props.urdu.firstname
        }
        iconType="user"
        keyboardType="email-address"
      />

      <FormInput
        labelValue={lastName}
        onChangeText={userName => setLastName(userName)}
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.lastname
            : stringsOfLanguages._props.urdu.lastname
        }
        iconType="user"
        keyboardType="email-address"
      />

      <FormInput
        labelValue={email}
        onChangeText={text => handleCheckEmail(text)}
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.email
            : stringsOfLanguages._props.urdu.email
        }
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
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.password
            : stringsOfLanguages._props.urdu.password
        }
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
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.confirmpass
            : stringsOfLanguages._props.urdu.confirmpass
        }
        iconType="lock"
        secureTextEntry={true}
      />

      <Text style={styles.errorText}>{error}</Text>
      <FormButton
        buttonTitle={
          toggle
            ? stringsOfLanguages._props.en.signup
            : stringsOfLanguages._props.urdu.signup
        }
        onPress={() =>
          signup(firstName, lastName, email, password, handleError)
        }
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('Terms & Conditions')}>
        <Text style={styles.terms}>
          {toggle
            ? stringsOfLanguages._props.en.terms
            : stringsOfLanguages._props.urdu.terms}
        </Text>
        <Text style={styles.conditions}>
          {toggle
            ? stringsOfLanguages._props.en.andconditions
            : stringsOfLanguages._props.urdu.andconditions}
        </Text>
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

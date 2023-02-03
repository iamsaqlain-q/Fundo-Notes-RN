/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigations/AuthProvider';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import stringsOfLanguages from '../utility/Localization/Translation';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkValidEmail, setCheckValidEmail] = useState('');
  const [error, setError] = useState();
  const toggle = useSelector(state => state.toggle);

  const {forgetPassword} = useContext(AuthContext);

  const handleCheckEmail = text => {
    let regexMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    setEmail(text);

    if (regexMail.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {' '}
        {toggle
          ? stringsOfLanguages._props.en.setnewpass
          : stringsOfLanguages._props.urdu.setnewpass}
      </Text>

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
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText={
          toggle
            ? stringsOfLanguages._props.en.oldpass
            : stringsOfLanguages._props.urdu.oldpass
        }
        iconType="lock"
        secureTextEntry={true}
      />

      <Text style={styles.errorText}>{error}</Text>
      <FormButton
        buttonTitle={
          toggle
            ? stringsOfLanguages._props.en.submit
            : stringsOfLanguages._props.urdu.submit
        }
        onPress={() => forgetPassword(email)}
      />
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'italic',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.setPass,
  },
  validtext: {
    fontSize: 13,
    color: Colors.red,
    alignSelf: 'flex-end',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
  },
});

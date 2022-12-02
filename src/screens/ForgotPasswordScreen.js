import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigations/AuthProvider';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [checkValidEmail, setCheckValidEmail] = useState('');
  const [error, setError] = useState();

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
      <Text style={styles.text}>Set New Password</Text>

      <FormInput
        labelValue={email}
        onChangeText={text => handleCheckEmail(text)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
      />

      {checkValidEmail ? (
        <Text style={styles.validtext}>Please enter a valid E-mail</Text>
      ) : (
        <Text></Text>
      )}

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Old Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <Text style={styles.errorText}>{error}</Text>
      <FormButton buttonTitle="Submit" onPress={() => forgetPassword(email)} />
    </View>
  );
};
export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    color: '#51C1F6',
  },
  validtext: {
    fontSize: 13,
    color: 'red',
    alignSelf: 'flex-end',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
  },
});

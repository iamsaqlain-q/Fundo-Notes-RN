/* eslint-disable no-useless-escape */
import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import CheckBox from '@react-native-community/checkbox';
import {AuthContext} from '../navigations/AuthProvider';
import GoogleButton from '../components/GoogleButton';
import stringsOfLanguages from '../services/Translation';

const SignIn = ({route, navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePass, setHidePass] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState('');
  const [error, setError] = useState();
  const [lang, setLang] = useState(true);

  const {signin, googleSignin} = useContext(AuthContext);

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

  const handleError = e => {
    setError(e);
    console.log(e);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity
        onPress={() => {
          setLang(!lang);
        }}>
        <Text style={styles.text}>
          {lang
            ? stringsOfLanguages._props.en.fundoonotes
            : stringsOfLanguages._props.urdu.fundoonotes}
        </Text>
      </TouchableOpacity>
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
        <Text> </Text>
      )}

      <FormInput
        labelValue={password}
        onChangeText={text => handleCheckPassword(text)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={!hidePass}
      />

      {checkValidPassword ? (
        <Text style={styles.validtext}>Please enter a valid password</Text>
      ) : (
        <Text> </Text>
      )}

      <View style={styles.showPass}>
        <CheckBox
          disabled={false}
          value={hidePass}
          onValueChange={() => {
            setHidePass(!hidePass);
          }}
          tintColors={{true: '#51C1F6', false: 'black'}}
        />
        <Text style={styles.showPassText}>Show Password</Text>
      </View>

      <Text style={styles.errorText}>{error}</Text>
      <FormButton
        buttonTitle="Sign In"
        onPress={() => signin(email, password, handleError)}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Forgotpassword')}>
        <Text style={styles.navButtonText}>
          {lang
            ? stringsOfLanguages._props.en.forgotpassword
            : stringsOfLanguages._props.urdu.forgotpassword}
        </Text>
      </TouchableOpacity>

      <GoogleButton
        buttonTitle={'Sign In with Google'}
        btnTyp="google"
        color="#fff"
        backgroundColor="#fd5ebf"
        onPress={() => googleSignin()}
      />

      <View style={styles.regContainer}>
        <Text style={styles.navButtonText}>
          {lang
            ? stringsOfLanguages._props.en.createaccount
            : stringsOfLanguages._props.urdu.createaccount}
        </Text>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText2}> Create One</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  regContainer: {
    flexDirection: 'row',
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
    color: '#50c0f5',
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 17,
    marginTop: 15,
    color: '#2e64e5',
  },
  navButtonText2: {
    fontSize: 17,
    marginTop: 5,
    color: '#8bd91d',
  },
  showPass: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: -25,
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
  },
  errorText: {
    fontSize: 13,
    color: 'red',
  },
});

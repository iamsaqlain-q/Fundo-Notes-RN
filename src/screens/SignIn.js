/* eslint-disable no-useless-escape */
import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import CheckBox from '@react-native-community/checkbox';
import {AuthContext} from '../navigations/AuthProvider';
import GoogleButton from '../components/GoogleButton';
import stringsOfLanguages from '../utility/Localization/Translation';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLang} from '../redux/actions';

const SignIn = ({route, navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePass, setHidePass] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState('');
  const [error, setError] = useState();
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  const {signin, googleSignin, fbSignin} = useContext(AuthContext);

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
      <View style={styles.langContainer}>
        <TouchableOpacity
          style={[
            styles.langBtn,
            {
              backgroundColor: toggle ? Colors.backColor : Colors.white,
              borderColor: toggle ? Colors.white : Colors.backColor,
            },
          ]}
          onPress={() => {
            dispatch(toggleLang(toggle));
          }}>
          <Text
            style={[
              styles.langTxt,
              {color: toggle ? Colors.white : Colors.backColor},
            ]}>
            Eng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.langBtn,
            {
              backgroundColor: toggle ? Colors.white : Colors.backColor,
              borderColor: toggle ? Colors.backColor : Colors.white,
            },
          ]}
          onPress={() => {
            dispatch(toggleLang(toggle));
          }}>
          <Text
            style={[
              styles.langTxt,
              {color: toggle ? Colors.backColor : Colors.white},
            ]}>
            Urdu
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity>
        <Text style={styles.text}>
          {toggle
            ? stringsOfLanguages._props.en.fundoonotes
            : stringsOfLanguages._props.urdu.fundoonotes}
        </Text>
      </TouchableOpacity>
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
          tintColors={{true: Colors.tintColor, false: Colors.black}}
        />
        <Text style={styles.showPassText}>
          {toggle
            ? stringsOfLanguages._props.en.showpass
            : stringsOfLanguages._props.urdu.showpass}
        </Text>
      </View>

      <Text style={styles.errorText}>{error}</Text>
      <FormButton
        buttonTitle={
          toggle
            ? stringsOfLanguages._props.en.signin
            : stringsOfLanguages._props.urdu.signin
        }
        onPress={() => signin(email, password, handleError)}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate(Strings.forgotPasswordScreen)}>
        <Text style={styles.navButtonText}>
          {toggle
            ? stringsOfLanguages._props.en.forgotpassword
            : stringsOfLanguages._props.urdu.forgotpassword}
        </Text>
      </TouchableOpacity>

      <GoogleButton
        buttonTitle={
          toggle
            ? stringsOfLanguages._props.en.signingoogle
            : stringsOfLanguages._props.urdu.signingoogle
        }
        btnTyp="google"
        color={Colors.white}
        backgroundColor={Colors.googleBtn}
        onPress={() => googleSignin()}
      />

      <GoogleButton
        buttonTitle={
          toggle ? 'Facebook' : stringsOfLanguages._props.urdu.signingoogle
        }
        btnTyp="facebook"
        color={Colors.white}
        backgroundColor={Colors.fbBtn}
        onPress={() => fbSignin()}
      />

      <View style={styles.regContainer}>
        <Text style={styles.navButtonText}>
          {toggle
            ? stringsOfLanguages._props.en.createaccount
            : stringsOfLanguages._props.urdu.createaccount}
        </Text>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate(Strings.signUpScreen)}>
          <Text style={styles.navButtonText2}>
            {toggle
              ? stringsOfLanguages._props.en.createone
              : stringsOfLanguages._props.urdu.createone}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
    color: Colors.fundooNotes,
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 17,
    marginTop: 15,
    color: Colors.navBtn,
  },
  navButtonText2: {
    fontSize: 17,
    marginTop: 5,
    color: Colors.navBtnTwo,
  },
  showPass: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: -25,
  },
  showPassText: {
    marginTop: 9,
    fontSize: 11,
    color: Colors.midGrey,
  },
  validtext: {
    fontSize: 13,
    color: 'red',
    alignSelf: 'flex-end',
  },
  errorText: {
    fontSize: 13,
    color: Colors.red,
  },
  langContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langBtn: {
    width: '13%',
    borderRadius: 11,
    margin: '0.5%',
    borderWidth: 2,
  },
  langTxt: {
    fontSize: 13,
    textAlign: 'center',
    padding: 5,
  },
});

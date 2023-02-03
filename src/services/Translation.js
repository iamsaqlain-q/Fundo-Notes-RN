import LocalizedStrings from 'react-native-localization';

const stringsOfLanguages = new LocalizedStrings({
  en: {
    fundoonotes: 'Fun-Do Notes',
    forgotpassword: 'Forgot Password?',
    createaccount: 'Do Not Have Any Account?',
    email: 'Email',
    password: 'Password',
    signin: 'Sign In',
    signingoogle: 'Sign In With Google',
    showpass: 'Show Password',
    createone: 'Create One',
  },

  urdu: {
    fundoonotes: 'فنڈو نوٹس',
    forgotpassword: 'پاسورڈ بھول گے ؟',
    createaccount: 'کوئی اکاؤنٹ نہیں ہے؟',
    email: 'ای میل',
    password: 'پاس ورڈ',
    signin: 'سائن ان ',
    signingoogle: 'گوگل کے ساتھ سائن ان کریں۔',
    showpass: 'پاسورڈ دکھاو',
    createone: 'ایک بناؤ',
  },
});

export default stringsOfLanguages;

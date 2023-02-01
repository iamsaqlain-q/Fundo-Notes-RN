import LocalizedStrings from 'react-native-localization';

const stringsOfLanguages = new LocalizedStrings({
  en: {
    fundoonotes: 'Fun-Do Notes',
    forgotpassword: 'Forgot Password?',
    createaccount: 'Do Not Have Any Account?',
  },

  urdu: {
    fundoonotes: 'فنڈو نوٹس',
    forgotpassword: 'پاسورڈ بھول گے ؟',
    createaccount: 'کوئی اکاؤنٹ نہیں ہے؟',
  },
});

export default stringsOfLanguages;

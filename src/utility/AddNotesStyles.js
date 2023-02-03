import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },

  topRowItems: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  leftArrrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },

  topRightIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  inputBox: {
    flex: 1,
    paddingHorizontal: 15,
  },

  bottomContainer: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  bottomIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  chipTextStyle: {
    borderRadius: 15,
    color: Colors.backColor,
    backgroundColor: Colors.white,
    fontSize: 13,
    padding: 10,
    margin: 10,
  },

  chipStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  reminderView: {
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: Colors.backColor,
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  reminderText: {
    color: Colors.white,
    fontSize: 15,
    alignSelf: 'center',
  },
});
export {styles};

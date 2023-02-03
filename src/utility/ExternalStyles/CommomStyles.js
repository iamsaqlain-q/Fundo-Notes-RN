import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: Sizes.avatar,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    paddingTop: 500,
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: Colors.modalBack,
  },
  modalItems: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },
  bottomMargin: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemText: {
    color: Colors.white,
    fontSize: 17,
    marginHorizontal: 20,
  },
  dateAndTimeText: {
    width: '30%',
    height: 30,
    backgroundColor: Colors.backColor,
    padding: 3,
    borderRadius: 10,
  },
  txtAfterSettingDate: {
    color: Colors.white,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
  },
  txt: {
    color: Colors.white,
    fontSize: 17,
    marginHorizontal: 20,
  },
});

export {styles};

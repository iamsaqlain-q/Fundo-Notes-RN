import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';
const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.mainColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: Sizes.avatar,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  searchText: {
    color: Colors.white,
    fontSize: 17,
  },

  avatarStyle: {
    marginLeft: Sizes.avatar,
  },

  gridIcon: {
    marginLeft: Sizes.avatar,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexEnd: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    paddingVertical: 50,
    paddingHorizontal: 40,
    backgroundColor: Colors.modalBack,
  },
  modal: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    backgroundColor: Colors.mainColor,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    borderTopStartRadius: 25,
    flexWrap: 'wrap',
  },
  googleText: {
    color: Colors.white,
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
  },
  avatarInModal: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    width: '20%',
  },
  idName: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    width: '80%',
  },
  sign_out_container: {
    marginTop: 70,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    width: '100%',
    borderColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
  sign_out_text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.white,
    margin: 5,
  },
  privacy_policy: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  privacy_text: {
    fontSize: 13,
    color: Colors.white,
    textAlign: 'center',
  },
});

export {styles};

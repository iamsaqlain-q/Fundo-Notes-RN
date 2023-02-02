import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

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
});

export {styles};

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const BottomBar = ({onPress}) => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.firstIcon}>
        <Ionicons
          name="checkbox-outline"
          size={Sizes.normalBtn}
          style={{color: Colors.white}}
        />
      </View>

      <View style={styles.iconMargin}>
        <Ionicons
          name="brush-outline"
          size={Sizes.normalBtn}
          style={{color: Colors.white}}
        />
      </View>

      <View style={styles.iconMargin}>
        <Ionicons
          name="mic-outline"
          size={Sizes.normalBtn}
          style={{color: Colors.white}}
        />
      </View>

      <View style={styles.iconMargin}>
        <Ionicons
          name="image-outline"
          size={Sizes.normalBtn}
          style={{color: Colors.white}}
        />
      </View>

      <TouchableOpacity style={styles.addIconBack} onPress={onPress}>
        <View style={styles.plusIcon}>
          <FontAwesome5 name="plus" size={30} style={{color: Colors.white}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  conatainer: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  firstIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  iconMargin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  addIconBack: {
    top: -45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    borderColor: Colors.lightWhite,
    borderRadius: 20,
    width: 70,
    height: 70,
    borderWidth: 9,
    backgroundColor: Colors.mainColor,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

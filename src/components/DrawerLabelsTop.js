import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const DrawerLabelsTop = ({label}) => {
  const [changeLayout, setChangeLayout] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.barIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Ionicons
            name="menu"
            size={Sizes.normalBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.white,
            fontSize: Sizes.smallBtn,
          }}>
          {label}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={Sizes.smallBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setChangeLayout(!changeLayout);
          }}>
          <Icon
            name={changeLayout ? 'view-agenda-outline' : 'view-grid-outline'}
            size={Sizes.normalBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon
            name="dots-vertical"
            size={Sizes.normalBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerLabelsTop;

const styles = StyleSheet.create({
  topContainer: {
    height: 50,
    backgroundColor: Colors.mainColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const ArchiveTopBar = ({changeLayout, setChangeLayout}) => {
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
          Archive
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
          <Ionicons
            name={changeLayout ? 'grid-outline' : 'list-outline'}
            size={Sizes.normalBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ArchiveTopBar;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const TrashTopBar = () => {
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
      <View style={{marginLeft: 20}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
          }}>
          Trash
        </Text>
      </View>
    </View>
  );
};
export default TrashTopBar;

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

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ArchiveTopBar = ({changeLayout, setChangeLayout}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.barIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Ionicons name="menu" size={25} style={{color: '#fff'}} />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
          }}>
          Archive
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="search" size={20} style={{color: '#fff'}} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setChangeLayout(!changeLayout);
          }}>
          <Ionicons
            name={changeLayout ? 'grid-outline' : 'list-outline'}
            size={20}
            style={{color: '#fff'}}
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
    backgroundColor: '#97e5fb',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

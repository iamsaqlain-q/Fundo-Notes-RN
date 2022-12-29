import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

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
          <Ionicons name="menu" size={25} style={{color: '#fff'}} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
          }}>
        {label}
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
          <Icon
            name={changeLayout ? 'view-agenda-outline' : 'view-grid-outline'}
            size={25}
            style={{color: '#fff'}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerLabelsTop;

const styles = StyleSheet.create({
  topContainer: {
    height: 50,
    backgroundColor: '#97e5fb',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

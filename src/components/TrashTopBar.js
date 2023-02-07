import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import {styles} from '../utility/ExternalStyles/CommomStyles';

const TrashTopBar = props => {
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
            color: Colors.white,
            fontSize: Sizes.smallBtn,
          }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};
export default TrashTopBar;

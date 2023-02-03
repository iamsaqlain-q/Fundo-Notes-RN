import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import {styles} from '../utility/CommomStyles';

const TasksTopBar = () => {
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
            marginHorizontal: 10,
            fontSize: 20,
          }}>
          Tasks
        </Text>
      </View>
    </View>
  );
};
export default TasksTopBar;

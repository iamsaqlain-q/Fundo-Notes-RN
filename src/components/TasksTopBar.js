import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TasksTopBar = () => {
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

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#97e5fb',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

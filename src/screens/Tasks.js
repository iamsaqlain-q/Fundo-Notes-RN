import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {openDatabase} from 'react-native-sqlite-storage';
import TasksTopBar from '../components/TasksTopBar';

const db = openDatabase({
  name: 'rn_sqlite',
});
const Tasks = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <View style={styles.archiveContainer}>
      <View style={{height: 50}}>
        <TasksTopBar />
      </View>
      <View style={styles.listStyle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Icons name="file-plus-outline" size={20} color="#4ebef4" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4ebef4',
              marginHorizontal: 5,
            }}>
            Add Task
          </Text>
        </View>
        <TextInput
          placeholder="Enter task name"
          placeholderTextColor="#4ebef4"
          value={category}
          onChangeText={setCategory}
          style={{
            borderWidth: 3,
            borderRadius: 15,
            borderColor: '#4ebef4',
            color: '#4ebef4',
            marginVertical: 10,
          }}
        />

        <Button title="Add" />

        <FlatList
          data={categories}
          renderItem={() => {}}
          key={cat => cat.id}
        />
      </View>
    </View>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  archiveContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  listStyle: {
    width: '100%',
    // alignSelf: 'center',
    marginVertical: 10,
  },
});

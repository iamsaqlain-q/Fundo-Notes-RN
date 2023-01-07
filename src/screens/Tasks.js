import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import TasksTopBar from '../components/TasksTopBar';
import SQLite from 'react-native-sqlite-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);
const Tasks = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
        [],
        (sqlTxn, res) => {
          console.log('Table created !');
        },
        error => {
          console.log('Error on creating table', error.message);
        },
      );
    });
  };

  const addCategory = async () => {
    if (!category) {
      Alert.alert('Please Enter Category!');
      return false;
    } else {
      try {
        await db.transaction(async txn => {
          await txn.executeSql(
            'INSERT INTO categories (name) VALUES (?)',
            [category],
            (sqlTxn, res) => {
              console.log(`${category} category added successfully!`);
              getCategories();
              setCategory('');
            },
          );
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM categories ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          console.log('Categories retrieved successfully!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }
            setCategories(results);
          }
        },
        error => {
          console.log('Error on getting categories', error.message);
        },
      );
    });
  };

  const renderCategory = ({item}) => {
    return (
      <View style={styles.todoView}>
        <View style={styles.itemView}>
          <Text style={styles.itemText}>{item.id}</Text>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    createTables();
    getCategories();
  }, []);

  return (
    <View style={styles.archiveContainer}>
      <View style={styles.topBar}>
        <TasksTopBar />
      </View>
      <View style={styles.listStyle}>
        <View style={styles.headingView}>
          <Icons name="file-plus-outline" size={20} color="#4ebef4" />
          <Text style={styles.headingText}>Add Task</Text>
        </View>
        <TextInput
          placeholder="Enter task"
          placeholderTextColor="#4ebef4"
          value={category}
          onChangeText={setCategory}
          style={styles.txtInput}
        />

        <TouchableOpacity onPress={addCategory} style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>

        <FlatList
          data={categories}
          renderItem={renderCategory}
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
    backgroundColor: '#f2f2f2',
  },

  topBar: {
    height: 50,
    margin: 20,
  },

  listStyle: {
    width: '100%',
    paddingHorizontal: 20,
  },

  todoView: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  itemView: {
    backgroundColor: '#97e5fb',
    width: '100%',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  itemText: {
    marginRight: 10,
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },

  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4ebef4',
    marginHorizontal: 5,
  },

  txtInput: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#4ebef4',
    color: '#4ebef4',
    marginVertical: 10,
    padding: 10,
  },

  addBtn: {
    backgroundColor: '#4ebef4',
    width: 100,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  addBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

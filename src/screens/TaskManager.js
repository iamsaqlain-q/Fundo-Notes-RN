import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import TasksTopBar from '../components/TasksTopBar';
import SQLite from 'react-native-sqlite-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

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
const TaskManager = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS taskList (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
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

  const addTask = () => {
    if (!task) {
      Alert.alert('Please Enter task First!');
      return false;
    } else {
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO taskList (name) VALUES (?)',
          [task],
          (sqlTxn, res) => {
            console.log(`${task} task added successfully!`);
            getTaskList();
            setTask('');
          },
          error => {
            console.log('Error on adding task', error.message);
          },
        );
      });
    }
  };

  const deleteTask = () => {
    db.transaction(txn => {
      txn.executeSql(
        "DELETE FROM taskList WHERE id = '4'",
        [],
        (sqlTxn, res) => {
          console.log('task deleted successfully!');
          getTaskList();
        },
        error => {
          console.log('Error on deleting task', error.message);
        },
      );
    });
  };

  const getTaskList = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM taskList ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          console.log('taskList retrieved successfully!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }
            setTaskList(results);
          }
        },
        error => {
          console.log('Error on getting taskList', error.message);
        },
      );
    });
  };

  const renderTask = ({item}) => {
    return (
      <View style={styles.todoView}>
        <View style={styles.itemView}>
          <Text style={styles.itemText}>{item.id}</Text>
          <Text style={styles.itemText}>{item.name}</Text>
          <View>
            <TouchableOpacity onPress={deleteTask}>
              <Icon name="delete" size={Sizes.smallBtn} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    createTables();
    getTaskList();
  }, []);

  return (
    <View style={styles.archiveContainer}>
      <View style={styles.topBar}>
        <TasksTopBar />
      </View>
      <View style={styles.listStyle}>
        <View style={styles.headingView}>
          <Icons
            name="file-plus-outline"
            size={Sizes.smallBtn}
            color={Colors.backColor}
          />
          <Text style={styles.headingText}>Add Task</Text>
        </View>
        <TextInput
          placeholder="Enter task"
          placeholderTextColor={Colors.backColor}
          value={task}
          onChangeText={setTask}
          style={styles.txtInput}
        />

        <TouchableOpacity onPress={addTask} style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>

        <FlatList data={taskList} renderItem={renderTask} key={cat => cat.id} />
      </View>
    </View>
  );
};
export default TaskManager;

const styles = StyleSheet.create({
  archiveContainer: {
    flex: 1,
    backgroundColor: Colors.lightWhite,
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
    borderColor: Colors.taskBorder,
  },

  itemView: {
    backgroundColor: Colors.mainColor,
    width: '100%',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  itemText: {
    marginRight: 10,
    color: Colors.white,
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
    color: Colors.backColor,
    marginHorizontal: 5,
  },

  txtInput: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: Colors.backColor,
    color: Colors.backColor,
    marginVertical: 10,
    padding: 10,
  },

  addBtn: {
    backgroundColor: Colors.backColor,
    width: 90,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  addBtnText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

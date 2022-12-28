/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {labelList} from '../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect} from 'react';
import {fetchLabel} from '../services/LabelsServices';
import {useUid} from '../hooks/useUid';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();
  //const [labelData, setLabelData] = useState([]);
  const labels_list = useSelector(state => state.labels_list);
  const dispatch = useDispatch();
  //console.log('labelData', labelList);
  const userId = useUid();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLabels();
    });
    return unsubscribe;
  }, [navigation]);

  const getLabels = async () => {
    let data = await fetchLabel(userId);
    dispatch(labelList(data));
    //setLabelData(data);
  };
  //console.log('label List', labels_list);
  return (
    <DrawerContentScrollView
      props={props}
      contentContainerStyle={{backgroundColor: '#97e5fb'}}>
      <View style={styles.nameContainer}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>Fun-Do Notes</Text>
        </View>
        <View>
          <DrawerItem
            icon={({color}) => (
              <Ionicons name="bulb-outline" size={23} style={{color: '#fff'}} />
            )}
            label={() => <Text style={styles.screenText}>Notes</Text>}
            onPress={() => navigation.navigate('Home')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="notifications-outline"
                size={23}
                style={{color: '#fff'}}
              />
            )}
            label={() => <Text style={styles.screenText}>Reminders</Text>}
            onPress={() => navigation.navigate('Reminder')}
          />

          <View style={styles.labelsContainer}>
            <View style={styles.labelsTopText}>
              <Text>Labels</Text>
              <Text>Edit</Text>
            </View>
            {labels_list?.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('DrawerLabels')}
                  style={{flexDirection: 'row', padding: 10}}
                  key={item.id}>
                  <View>
                    <Icons name="label-outline" size={23} color="#fff" />
                  </View>
                  <Text style={{marginLeft: 20, fontSize: 15, color: '#fff'}}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.borderBottom}>
            <DrawerItem
              icon={({color}) => (
                <Ionicons
                  name="add-outline"
                  size={23}
                  style={{color: '#fff'}}
                />
              )}
              label={() => (
                <Text style={styles.screenText}>Create new label</Text>
              )}
              onPress={() => navigation.navigate('Create new label')}
            />
          </View>
          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="archive-outline"
                size={23}
                style={{color: '#fff'}}
              />
            )}
            label={() => <Text style={styles.screenText}>Archive</Text>}
            onPress={() => navigation.navigate('Archive')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="trash-outline"
                size={23}
                style={{color: '#fff'}}
              />
            )}
            label={() => <Text style={styles.screenText}>Trash</Text>}
            onPress={() => navigation.navigate('Trash')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="settings-outline"
                size={23}
                style={{color: '#fff'}}
              />
            )}
            label={() => <Text style={styles.screenText}>Settings</Text>}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    backgroundColor: '#97e5fb',
  },
  nameView: {
    justifyContent: 'flex-start',
    marginTop: 20,
    padding: 15,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  screenText: {
    fontSize: 17,
    color: '#fff',
    marginLeft: -10,
  },

  labelsContainer: {
    paddingLeft: 10,
    borderTopWidth: 1,
    //borderBottomWidth: 1,
    borderColor: '#fff',
  },
  labelsTopText: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
});

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
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const CustomDrawer = ({props, navigation}) => {
  const labels_list = useSelector(state => state.labels_list);
  const dispatch = useDispatch();
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
  };
  return (
    <DrawerContentScrollView props={props}>
      <View style={styles.nameContainer}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>Fun-Do Notes</Text>
        </View>
        <View>
          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="bulb-outline"
                size={Sizes.midBtn}
                color={Colors.white}
              />
            )}
            label={() => <Text style={styles.screenText}>Notes</Text>}
            onPress={() => navigation.navigate('Home')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="notifications-outline"
                size={Sizes.midBtn}
                color={Colors.white}
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
            {labels_list?.map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DrawerLabels', {...item})}
                style={{flexDirection: 'row', padding: 10}}
                key={item.id}>
                <View>
                  <Icons
                    name="label-outline"
                    size={Sizes.midBtn}
                    color={Colors.white}
                  />
                </View>
                <Text
                  style={{marginLeft: 20, fontSize: 15, color: Colors.white}}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.borderBottom}>
            <DrawerItem
              icon={({color}) => (
                <Ionicons
                  name="add-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
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
                size={Sizes.midBtn}
                color={Colors.white}
              />
            )}
            label={() => <Text style={styles.screenText}>Archive</Text>}
            onPress={() => navigation.navigate('Archive')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="trash-outline"
                size={Sizes.midBtn}
                color={Colors.white}
              />
            )}
            label={() => <Text style={styles.screenText}>Trash</Text>}
            onPress={() => navigation.navigate('Trash')}
          />

          <DrawerItem
            icon={({color}) => (
              <Icons
                name="file-document-edit-outline"
                size={Sizes.midBtn}
                color={Colors.white}
              />
            )}
            label={() => <Text style={styles.screenText}>Tasks</Text>}
            onPress={() => navigation.navigate('TaskManager')}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons
                name="settings-outline"
                size={Sizes.midBtn}
                color={Colors.white}
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
    backgroundColor: Colors.mainColor,
  },
  nameView: {
    justifyContent: 'flex-start',
    marginTop: 20,
    padding: 15,
  },
  nameText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  screenText: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: -10,
  },

  labelsContainer: {
    paddingLeft: 10,
    borderTopWidth: 1,
    borderColor: Colors.white,
  },
  labelsTopText: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: Colors.white,
  },
});

/* eslint-disable radix */
import React, {useState, useContext} from 'react';
import {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '../components/BottomSheet';
import ReminderBottomSheet from '../components/ReminderBottomSheet';
import {AuthContext} from '../navigations/AuthProvider';
import {addLabelsToNotes} from '../services/LabelsServices';
import {createNote, editNote} from '../services/NotesServices';
import Notifications from '../services/Notifications';
import 'react-native-get-random-values';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const Chip = ({children}) => (
  <Text style={styles.chipTextStyle}>{children}</Text>
);

const AddNotes = ({navigation, route}) => {

  const noteData = route.params;
  const newId = uuidv4();
  console.log('newId', newId);
  let labelData = route.params?.labelData || [];
  let reminders = noteData?.editdata?.reminderData || {};

  const [title, setTitle] = useState(noteData?.editdata?.title || '');
  const [description, setDescription] = useState(
    noteData?.editdata?.description || '',
  );
  const [isPinned, setIsPinned] = useState(
    noteData?.editdata?.isPinned || false,
  );
  const [isInArchive, setIsInArchive] = useState(
    noteData?.editData?.isInArchive || false,
  );
  const [isInTrash, setIsInTrash] = useState(
    noteData?.editdata?.isInTrash || false,
  );

  const [showModal, setShowModal] = useState(false);
  const [showReminderSheet, setShowReminderSheet] = useState(false);
  const {user} = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState('');
  const [myDate, setMyDate] = useState('' || noteData?.editData?.reminderData);
  const [timeText, setTimeText] = useState('');
  const [dateText, setDateText] = useState('');

  const getId = () => {
    let data = Date.now();
    data = data.toString().substring(4);
    return data;
  };

  const receivId = noteData?.noteId;
  const noteId = receivId || getId();

  useEffect(() => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    setCurrentTime(hours + ' ' + ':' + ' ' + minutes);
  }, []);

  const handleBackPress = async (changeData = {}) => {
    let userId = user.uid;
    let momentDate = moment(myDate).format('LLL');
    const data = {
      title,
      description,
      isPinned,
      isInArchive,
      isInTrash,
      labelData,
      ...changeData,
    };
    if (receivId) {
      await editNote(
        title,
        description,
        userId,
        noteId,
        isPinned,
        isInArchive,
        isInTrash,
        labelData,
      );
    } else {
      await createNote(
        title,
        description,
        userId,
        isPinned,
        isInArchive,
        isInTrash,
        labelData,
        JSON.stringify(momentDate),
        noteId.toString(),
      );
    }
    labelData.forEach(item => {
      addLabelsToNotes(userId, newId, item.id, data);
    });
    if (myDate) {
      Notifications.schduleNotification(myDate, noteId.toString());
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowItems}>
        <View style={styles.leftArrrow}>
          <TouchableOpacity
            onPress={() => {
              handleBackPress();
            }}>
            <Icons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsPinned(!isPinned);
            }}>
            <Icons
              name={isPinned ? 'pin' : 'pin-outline'}
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsInTrash(!isInTrash);
            }}>
            <Icons
              name={isInTrash ? 'trash-can' : 'trash-can-outline'}
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setIsInArchive(!isInArchive);
            }}>
            <Icons
              name={
                isInArchive
                  ? 'archive-arrow-down'
                  : 'archive-arrow-down-outline'
              }
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setShowReminderSheet(!showReminderSheet);
            }}>
            <Icons name="bell-plus-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputBox}>
        <View>
          <TextInput
            placeholder="Title"
            style={{fontSize: 25}}
            multiline
            value={title}
            onChangeText={input => setTitle(input)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Note"
            style={{fontSize: 20}}
            multiline
            value={description}
            onChangeText={input => setDescription(input)}
          />
        </View>
        {dateText !== '' ? (
          <View style={styles.reminderView}>
            <View style={{margin: 5}}>
              <TouchableOpacity
                onPress={() => {
                  setShowReminderSheet(!showReminderSheet);
                }}>
                <Icons name="alarm" size={21} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.reminderText}>
              {dateText !== ''
                ? dateText + ' at ' + timeText
                : reminders.toString()}
            </Text>
            <View style={{margin: 5}}>
              <TouchableOpacity
                onPress={() => {
                  Notifications.cancelReminder(parseInt(noteId));
                }}>
                <Icons name="close" size={21} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.chipStyle}>
          {labelData.map(label => (
            <Chip key={label.id}>{label.label}</Chip>
          ))}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <Icons name="palette-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Edited {currentTime}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Icons name="dots-vertical" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <BottomSheet
          setShowModal={setShowModal}
          showModal={showModal}
          navigation={navigation}
          noteId={noteId}
        />
      </View>
      <View>
        <ReminderBottomSheet
          showReminderSheet={showReminderSheet}
          myDate={myDate}
          setMyDate={setMyDate}
          setShowReminderSheet={setShowReminderSheet}
          timeText={timeText}
          setTimeText={setTimeText}
          dateText={dateText}
          setDateText={setDateText}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97e5fb',
  },

  topRowItems: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  leftArrrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },

  topRightIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  inputBox: {
    flex: 1,
    paddingHorizontal: 15,
  },

  bottomContainer: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  bottomIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  chipTextStyle: {
    borderRadius: 15,
    color: '#4ebef4',
    backgroundColor: '#fff',
    fontSize: 13,
    padding: 10,
    margin: 10,
  },

  chipStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  reminderView: {
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#4ebef4',
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  reminderText: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
  },
});

/* eslint-disable no-unused-vars */
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
import {v4 as uuidv4} from 'uuid';
import Share from 'react-native-share';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import {styles} from '../utility/ExternalStyles/AddNotesStyles';
import {useDispatch, useSelector} from 'react-redux';
import {setLattitude, setLongitude} from '../redux/actions';

const Chip = ({children}) => (
  <Text style={styles.chipTextStyle}>{children}</Text>
);

const AddNotes = ({navigation, route}) => {
  const noteData = route.params;
  const newId = uuidv4();
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
  const lattitude = useSelector(state => state.lattitude);
  const longitude = useSelector(state => state.longitude);
  const dispatch = useDispatch();

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

  const handleSend = async () => {
    const shareOptions = {
      message: noteData?.editdata?.title.toString(),
    };
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error : ', error);
    }
  };

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
    if (myDate) {
      Notifications.schduleNotification(myDate, noteId.toString());
    }
    if (lattitude && longitude !== '') {
      Notifications.schduleNotification(new Date(), noteId.toString());
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
            <Icons
              name="arrow-left"
              size={Sizes.normalBtn}
              color={Colors.white}
            />
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
              color={Colors.white}
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
              color={Colors.white}
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
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightIcons}>
          <TouchableOpacity
            onPress={() => {
              setShowReminderSheet(!showReminderSheet);
            }}>
            <Icons
              name="bell-plus-outline"
              size={Sizes.normalBtn}
              color={Colors.white}
            />
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
                <Icons
                  name="alarm"
                  size={Sizes.smallBtn}
                  color={Colors.white}
                />
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
                <Icons
                  name="close"
                  size={Sizes.smallBtn}
                  color={Colors.white}
                />
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
            <Icons
              name="palette-outline"
              size={Sizes.normalBtn}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <Text style={{fontSize: 15, color: Colors.white}}>
              Edited {currentTime}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Icons
              name="dots-vertical"
              size={Sizes.normalBtn}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <BottomSheet
          setShowModal={setShowModal}
          showModal={showModal}
          navigation={navigation}
          noteId={noteId}
          handleSend={handleSend}
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
          onPress={() => {
            dispatch(setLattitude(Sizes.myLattitude));
            dispatch(setLongitude(Sizes.myLongitude));
            navigation.navigate('GeoLocation');
          }}
        />
      </View>
    </View>
  );
};
export default AddNotes;

import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const ReminderBottomSheet = ({
  navigation,
  showReminderSheet,
  setShowReminderSheet,
  myDate,
  setMyDate,
  timeText,
  setTimeText,
  dateText,
  setDateText,
}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //const [dateText, setDateText] = useState('');
  //const [timeText, setTimeText] = useState('');
  // const [myDate, setMyDate] = useState(new Date());
  const tomorrowMorning = moment()
    .add(1, 'days')
    .hour(7)
    .minute(0)
    .format('hh : mm a');
  //console.log('Tomorrow', tomorrowMorning);

  const changeSelectedDate = (event, selectedDate) => {
    setShow(false);
    // const {
    //   type,
    //   nativeEvent: {timestamp},
    // } = event;
    // console.log('Type', type);
    // console.log('times', timestamp);
    // console.log('moment date', moment(timestamp).format('LLL'));
    const currentDate = selectedDate;
    //console.log('currentDate', currentDate);
    let fDate =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();
    let fTime =
      currentDate.getHours() + ' ' + ':' + ' ' + currentDate.getMinutes();
    //console.log('fDate', fDate);
    //console.log('fTime', fTime);
    setDateText(fDate);
    setTimeText(fTime);
    setMyDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <View>
        {show && (
          <RNDateTimePicker
            value={myDate}
            mode={mode}
            is24Hour={true}
            display={'default'}
            onChange={changeSelectedDate}
          />
        )}
      </View>
      <Modal
        visible={showReminderSheet}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setShowReminderSheet(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalItems}>
            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="calendar-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  showMode('date');
                }}
                style={{flexDirection: 'row'}}>
                <View style={{width: '65%'}}>
                  <Text style={styles.txt}>Pick a date</Text>
                </View>
                <View style={styles.dateAndTimeText}>
                  <Text style={styles.txtAfterSettingDate}>{dateText}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="clock-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  showMode('time');
                }}>
                <View style={{width: '65%'}}>
                  <Text style={styles.txt}>Pick a time</Text>
                </View>
                <View style={styles.dateAndTimeText}>
                  <Text style={styles.txtAfterSettingDate}>{timeText}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Ionicons name="alarm-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {}}>
                <View style={{width: '65%'}}>
                  <Text style={styles.txt}>Tomorrow morning</Text>
                </View>
                <View style={styles.dateAndTimeText}>
                  <Text style={styles.txtAfterSettingDate}>
                    {tomorrowMorning}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="map-marker-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txt}>Pick a place</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="home" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* <View>
        {showTimePicker && (
          <RNDateTimePicker
            value={new Date()}
            mode={'time'}
            is24Hour={true}
            display={'default'}
            onChange={() => setShowTimePicker(!showTimePicker)}
          />
        )}
      </View> */}
    </View>
  );
};

export default ReminderBottomSheet;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 500,
    alignSelf: 'flex-start',
    width: '100%',
    //height: 'auto',
    backgroundColor: '#00000099',
  },

  modalItems: {
    flex: 1,
    backgroundColor: '#97e5fb',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },

  bottomMargin: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  txt: {
    color: '#fff',
    fontSize: 17,
    marginHorizontal: 20,
  },

  dateAndTimeText: {
    width: '30%',
    height: 30,
    backgroundColor: '#4ebef4',
    padding: 3,
    borderRadius: 10,
    //marginLeft: 50,
  },

  txtAfterSettingDate: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
  },
});

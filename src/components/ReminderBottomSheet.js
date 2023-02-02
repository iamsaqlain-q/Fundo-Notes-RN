import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

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
  const tomorrowMorning = moment()
    .add(1, 'days')
    .hour(7)
    .minute(0)
    .format('hh : mm a');

  const changeSelectedDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    let fDate =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();
    let fTime =
      currentDate.getHours() + ' ' + ':' + ' ' + currentDate.getMinutes();
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
            value={new Date()}
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
                <Icons
                  name="calendar-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
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
                <Icons
                  name="clock-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
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
                <Ionicons
                  name="alarm-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
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
                <Icons
                  name="map-marker-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txt}>Pick a place</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="home" size={Sizes.midBtn} color={Colors.white} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: Colors.modalBack,
  },

  modalItems: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },

  bottomMargin: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  txt: {
    color: Colors.white,
    fontSize: 17,
    marginHorizontal: 20,
  },

  dateAndTimeText: {
    width: '30%',
    height: 30,
    backgroundColor: Colors.backColor,
    padding: 3,
    borderRadius: 10,
  },

  txtAfterSettingDate: {
    color: Colors.white,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
  },
});

import React, {useState} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import {styles} from '../utility/ExternalStyles/CommomStyles';

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
  onPress,
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
    // let fDate =
    //   currentDate.getDate() +
    //   '/' +
    //   (currentDate.getMonth() + 1) +
    //   '/' +
    //   currentDate.getFullYear();
    // let fTime =
    //   currentDate.getHours() + ' ' + ':' + ' ' + currentDate.getMinutes();
    // setDateText(fDate);
    // setTimeText(fTime);
    setMyDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  // const setLocation = () => {
  //   setLattitude(Sizes.myLattitude);
  //   setLongitude(Sizes.myLongitude);
  // };
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
              <TouchableOpacity onPress={onPress}>
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

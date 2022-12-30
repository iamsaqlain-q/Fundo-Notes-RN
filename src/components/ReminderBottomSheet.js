import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const ReminderBottomSheet = ({
  navigation,
  showReminderSheet,
  setShowReminderSheet,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  return (
    <View>
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
                  setShowDatePicker(!showDatePicker);
                }}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Pick a date
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="clock-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowTimePicker(!showTimePicker);
                }}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Pick a time
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Ionicons name="alarm-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Later Today
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="map-marker-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Pick a place
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="home" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        {showDatePicker && (
          <RNDateTimePicker
            value={new Date()}
            mode={'date'}
            is24Hour={true}
            display={'spinner'}
            onChange={() => setShowDatePicker(!showDatePicker)}
          />
        )}
      </View>

      <View>
        {showTimePicker && (
          <RNDateTimePicker
            value={new Date()}
            mode={'time'}
            is24Hour={true}
            display={'spinner'}
            onChange={() => setShowTimePicker(!showTimePicker)}
          />
        )}
      </View>
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
});

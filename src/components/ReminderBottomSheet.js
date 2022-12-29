import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReminderBottomSheet = ({
  navigation,
  showReminderSheet,
  setShowReminderSheet,
}) => {
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
                <Icons name="clock-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Pick a date & time
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

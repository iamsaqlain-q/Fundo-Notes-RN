import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSheet = ({
  navigation,
  showModal,
  setShowModal,
  noteId,
  selectedLabels,
}) => {
  return (
    <View>
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setShowModal(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalItems}>
            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="label-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddLabelsToNote', {
                    noteId: noteId,
                  });
                }}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Labels
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="share-variant-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons name="message-alert-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Help & Feedback
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;

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

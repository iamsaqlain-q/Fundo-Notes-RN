import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const BottomSheet = ({
  navigation,
  showModal,
  setShowModal,
  noteId,
  selectedLabels,
  handleSend,
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
                <Icons
                  name="label-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddLabelsToNote', {
                    noteId: noteId,
                  });
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 17,
                    marginHorizontal: 20,
                  }}>
                  Labels
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons
                  name="share-variant-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSend}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 17,
                    marginHorizontal: 20,
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomMargin}>
              <TouchableOpacity>
                <Icons
                  name="message-alert-outline"
                  size={Sizes.midBtn}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 17,
                    marginHorizontal: 20,
                  }}>
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
});

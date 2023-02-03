import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import {styles} from '../utility/CommomStyles';

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
                <Text style={styles.itemText}>Labels</Text>
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
                <Text style={styles.itemText}>Send</Text>
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
                <Text style={styles.itemText}>Help & Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;

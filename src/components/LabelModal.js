import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const LabelModal = ({navigation, showModal, setShowModal}) => {
  return (
    <View>
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setShowModal(false);
        }}>
        <View
          style={{
            flex: 1,
            marginTop: 500,
            alignSelf: 'flex-start',
            width: '100%',
            //height: 'auto',
            backgroundColor: '#00000099',
            borderWidth: 0.5,
            borderColor: '#4ebef4',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#97e5fb',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 20,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <TouchableOpacity>
                <Icons name="label-outline" size={23} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Labels');
                }}>
                <Text
                  style={{color: '#fff', fontSize: 17, marginHorizontal: 20}}>
                  Labels
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
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

            <View style={{flexDirection: 'row', marginBottom: 20}}>
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

export default LabelModal;

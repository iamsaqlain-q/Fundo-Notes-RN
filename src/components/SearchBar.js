/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react';
import {Text, View, Modal, Pressable, Alert} from 'react-native';
import {Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../navigations/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import {styles} from '../utility/ExternalStyles/SearchBarStyles';
import Strings from '../constants/Strings';

const SearchBar = ({toggleLayout, setToggleLayout, onPress}) => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [urlOfImage, setUrlOfImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {signout} = useContext(AuthContext);

  const submitImage = async img => {
    const uploadUri = img;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    setUploading(true);
    try {
      await storage().ref(fileName).putFile(uploadUri);
      setUploading(false);
      const url = await storage().ref(fileName).getDownloadURL();
      setUrlOfImage(url);
      Alert.alert(
        'Image Uploaded!',
        'Your image has been uploaded to cloud storage',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      submitImage(img.path);
      setImage(img.path);
    });
  };

  return (
    <View style={styles.searchContainer}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <FontAwesome5
            name="bars"
            size={Sizes.smallBtn}
            style={{color: Colors.white}}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SearchNotes');
          }}>
          <Text style={styles.searchText}>Search your notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridIcon}>
        <View>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name={toggleLayout ? 'view-agenda-outline' : 'view-grid-outline'}
              size={Sizes.normalBtn}
              style={{color: Colors.white}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarStyle}>
          <Pressable
            android_ripple={{color: Colors.white}}
            onPress={() => {
              setShowModal(true);
            }}>
            <Avatar.Image
              size={Sizes.avatar}
              source={image ? {uri: image} : {uri: Strings.profileImg}}
            />
          </Pressable>
        </View>
      </View>
      <View>
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => {
            setShowModal(false);
          }}>
          <View style={styles.flexEnd}>
            <View style={styles.modal}>
              <View>
                <Text style={styles.googleText}>Google</Text>
              </View>

              <View style={styles.avatarInModal}>
                <Pressable
                  onPress={() => {
                    chooseFromGallery();
                  }}>
                  <Avatar.Image
                    size={40}
                    source={image ? {uri: image} : {uri: Strings.profileImg}}
                  />
                </Pressable>
              </View>
              <View style={styles.idName}>
                <Text style={{color: Colors.white, fontSize: 15}}>
                  Saqlain Qureshi
                </Text>
                <Text style={{color: Colors.white, fontSize: 15}}>
                  test@gmail.com
                </Text>
              </View>
              <View style={styles.sign_out_container}>
                <View>
                  <Ionicons
                    name="exit-outline"
                    size={Sizes.avatar}
                    onPress={() => signout()}
                    style={{color: Colors.white}}
                  />
                </View>
                <View>
                  <Pressable onPress={() => signout()}>
                    <Text style={styles.sign_out_text}>Sign Out</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.privacy_policy}>
                <Text style={styles.privacy_text}>
                  Privacy Policy . Terms of Service
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SearchBar;

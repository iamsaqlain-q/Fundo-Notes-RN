import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Modal, Pressable, Alert} from 'react-native';
import {Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../navigations/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchBar = ({toggleLayout, setToggleLayout, onPress}) => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {signout} = useContext(AuthContext);

  const submitImage = async () => {
    const uploadUri = image;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    setUploading(true);

    try {
      await storage().ref(fileName).putFile(uploadUri);
      setUploading(false);
      Alert.alert(
        'Image Uploaded!',
        'Your image has been uploaded to cloud storage',
      );
    } catch (e) {
      console.log(e);
    }
    setImage(image);
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={styles.searchContainer}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <FontAwesome5 name="bars" size={20} style={{color: '#fff'}} />
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
              size={25}
              style={{color: '#fff'}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarStyle}>
          <Pressable
            android_ripple={{color: '#fff'}}
            onPress={() => {
              setShowModal(true);
            }}>
            <Avatar.Image
              size={30}
              source={image ? {uri: image} : require('../assets/avatar.png')}
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
                    submitImage();
                  }}>
                  <Avatar.Image
                    size={40}
                    source={
                      image ? {uri: image} : require('../assets/avatar.png')
                    }
                  />
                </Pressable>
              </View>
              <View style={styles.idName}>
                <Text style={{color: '#fff', fontSize: 15}}>
                  Saqlain Qureshi
                </Text>
                <Text style={{color: '#fff', fontSize: 15}}>
                  test@gmail.com
                </Text>
              </View>
              <View style={styles.sign_out_container}>
                <View>
                  <Ionicons
                    name="exit-outline"
                    size={35}
                    onPress={() => signout()}
                    style={{color: '#fff'}}
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

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#97e5fb',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    // marginVertical: 20,
    paddingHorizontal: 15,
  },

  searchText: {
    color: '#fff',
    fontSize: 17,
  },

  avatarStyle: {
    marginLeft: 30,
  },

  gridIcon: {
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexEnd: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    paddingVertical: 50,
    paddingHorizontal: 40,
    backgroundColor: '#00000099',
  },
  modal: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    backgroundColor: '#97e5fb',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    borderTopStartRadius: 25,
    flexWrap: 'wrap',
  },
  googleText: {
    color: '#fff',
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#52c2f5',
  },
  avatarInModal: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    width: '20%',
  },
  idName: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    width: '80%',
  },
  sign_out_container: {
    marginTop: 70,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    width: '100%',
    borderColor: '#52c2f5',
    borderBottomWidth: 1,
  },
  sign_out_text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
  },
  privacy_policy: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  privacy_text: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
  },
});

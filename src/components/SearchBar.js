import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Modal, Pressable} from 'react-native';
import {Searchbar, Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigations/AuthProvider';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {signout} = useContext(AuthContext);

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search your notes"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          borderRadius: 30,
          width: '100%',
          borderColor: '#52c2f5',
          backgroundColor: '#97e5fb',
        }}
        icon={true}
      />

      <View style={styles.iconStyle}>
        <FontAwesome5 name="bars" size={20} style={{color: '#fff'}} />
      </View>

      <View style={styles.avatarStyle}>
        <Pressable
          android_ripple={{color: '#fff'}}
          onPress={() => {
            setShowModal(true);
          }}>
          <Avatar.Image size={30} source={require('../assets/avatar.png')} />
        </Pressable>
      </View>
      <View>
        <Modal
          visible={showModal}
          transparent={true}
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
                <Avatar.Image
                  size={40}
                  source={require('../assets/avatar.png')}
                />
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
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 240,
  },
  iconStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -300,
  },
  flexEnd: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    marginVertical: 50,
    paddingRight: 40,
    flexWrap: 'wrap',
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

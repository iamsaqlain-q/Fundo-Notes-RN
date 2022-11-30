import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigations/AuthProvider';
import {Searchbar, Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const {signout} = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search your notes"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{borderRadius: 30, width: '100%'}}
          icon={true}
        />

        <View style={styles.iconStyle}>
          <FontAwesome5 name="bars" size={20} style={{color: '#666'}} />
        </View>

        <View style={styles.avatarStyle}>
          <Avatar.Image size={30} source={require('../assets/avatar.png')} />
        </View>
      </View>
      <FormButton buttonTitle="Sign Out" onPress={() => signout()} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
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
});

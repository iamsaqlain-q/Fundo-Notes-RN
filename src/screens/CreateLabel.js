import React, {useState} from 'react';
import {useEffect} from 'react';
import {Keyboard} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useUid} from '../hooks/useUid';
import {createNewLabel, fetchLabel} from '../services/LabelsServices';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateLabel = ({navigation}) => {
  const [changeIcon, setChangeIcon] = useState(true);
  const [label, setLabel] = useState([]);
  const [labelData, setLabelData] = useState([]);
  const userId = useUid();

  const getLabels = async () => {
    let data = await fetchLabel(userId);
    setLabelData(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLabels();
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, getLabels()]);

  const handleDoneLabel = async () => {
    setChangeIcon(!changeIcon);
    if (label !== '') {
      await createNewLabel(label, userId);
      setLabel('');
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back" size={25} style={{color: '#fff'}} />
        </TouchableOpacity>
        <Text style={styles.editText}>Edit labels</Text>
      </View>

      <View style={styles.createLabelContainer}>
        <TouchableOpacity
          onPress={() => {
            setChangeIcon(!changeIcon);
          }}>
          <Ionicons
            name={changeIcon ? 'add-outline' : 'close-outline'}
            size={30}
          />
        </TouchableOpacity>

        <TextInput
          value={label}
          onChangeText={text => setLabel(text)}
          placeholder="Create new label"
          placeholderTextColor="#f2f2f2"
          style={styles.labelInput}
        />

        <TouchableOpacity
          onPress={() => {
            handleDoneLabel();
          }}>
          <Ionicons
            name={changeIcon ? null : 'checkmark-outline'}
            size={30}
            style={{marginLeft: 75}}
          />
        </TouchableOpacity>
      </View>

      {/* <View>
        <FlatList
          data={labelData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => (
            <TouchableOpacity key={item.id}>
              <View
                style={{
                  // flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <Icon name="label-outline" size={25} color="#fff" />
                <Text style={{fontSize: 20, color: '#fff'}}>{item.label}</Text>
                <Icon name="pencil" size={25} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View> */}

      <View>
        {labelData.map(item => {
          //console.log('Items in array:', item);
          return (
            <TouchableOpacity key={item.id}>
              <View
                style={{
                  // flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <Icon name="label-outline" size={25} color="#fff" />
                <Text
                  style={{fontSize: 20, color: '#fff', marginHorizontal: 100}}>
                  {item.label}
                </Text>
                <Icon name="pencil" size={25} color="#fff" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default CreateLabel;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#97e5fb',
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  editText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 15,
  },

  createLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 30,
  },

  labelInput: {
    height: 50,
    fontSize: 17,
    marginHorizontal: 25,
  },
});

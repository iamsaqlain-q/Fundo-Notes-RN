/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
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
import LabelCard from '../components/LabelCard';
import {useSelector, useDispatch} from 'react-redux';
import {labelList} from '../redux/actions';
import {useCallback} from 'react';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const CreateLabel = ({navigation, route}) => {
  const noteId = route.params?.id;
  const [changeIcon, setChangeIcon] = useState(true);
  const [label, setLabel] = useState([]);
  const userId = useUid();
  const labels_list = useSelector(state => state.labels_list);
  const dispatch = useDispatch();

  const getLabels = useCallback(async () => {
    let data = await fetchLabel(userId);
    dispatch(labelList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDoneLabel = async () => {
    setChangeIcon(!changeIcon);
    if (label !== '') {
      await createNewLabel(label, userId);
      await getLabels();
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
          <Ionicons
            name="arrow-back"
            size={Sizes.normalBtn}
            color={Colors.white}
          />
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
          placeholderTextColor={Colors.lightWhite}
          style={styles.labelInput}
        />

        <TouchableOpacity onPress={handleDoneLabel}>
          <Ionicons
            name={changeIcon ? null : 'checkmark-outline'}
            size={30}
            style={{marginLeft: 90}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={labels_list}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => <LabelCard getLabels={getLabels} {...item} />}
        />
      </View>
    </View>
  );
};
export default CreateLabel;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.mainColor,
  },

  topContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  editText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
    marginHorizontal: 15,
  },

  createLabelContainer: {
    padding: 10,
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

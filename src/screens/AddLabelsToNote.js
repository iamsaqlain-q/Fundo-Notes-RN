import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUid} from '../hooks/useUid';
import {fetchLabel} from '../services/LabelsServices';
import {labelList} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const LabelCheck = ({data, onCheck, isCheck}) => {
  //console.log('Data', selectedLabels);
  //console.log('Render LabelCheck', data.label);
  // const labelStr = data.id + '|' + data.label;
  return (
    <View style={styles.labelCheckContainer}>
      <Icons name="label-outline" size={25} color="#fff" />
      <Text style={styles.labelNames}>{data.label}</Text>
      <View style={styles.checkBoxStyle}>
        <CheckBox value={isCheck(data)} onValueChange={() => onCheck(data)} />
      </View>
    </View>
  );
};

const LabelCheckWithMemo = React.memo(LabelCheck);

const AddLabelsToNote = ({navigation, route}) => {
  const [selectedLabels, setSelectedLabels] = useState([]);
  //const [labelData, setLabelData] = useState([]);
  const labels_list = useSelector(state => state.labels_list);
  const dispatch = useDispatch();
  const noteId = route.params?.noteId;
  //console.log('ID', noteId);
  const userId = useUid();

  const getLabels = async () => {
    let data = await fetchLabel(userId);
    dispatch(labelList(data));
    //setLabelData(data);
    //console.log('LabelData', labelData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLabels();
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const onCheck = useCallback(
    item => {
      const index = selectedLabels.indexOf(item);
      if (index === -1) {
        setSelectedLabels(prev => [...prev, item]);
      } else {
        const selected = [...selectedLabels];
        selected.splice(index, 1);
        setSelectedLabels(selected);
      }
    },
    [selectedLabels],
  );

  const isCheck = useCallback(
    dataStr => {
      return selectedLabels.includes(dataStr);
    },
    [selectedLabels],
  );
  //console.log('Selected', labelData);
  //console.log('Render addLabels');
  return (
    <View style={styles.container}>
      <View style={styles.seachLabelBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNotes', {
              // data: selectedLabels,
              labelData: selectedLabels,
              noteId: noteId,
            });
          }}>
          <Icons name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter label name"
          placeholderTextColor="#f2f2f2"
          style={styles.searchInput}
        />
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          {labels_list.map(itm => (
            <LabelCheckWithMemo
              key={itm.id}
              data={itm}
              isCheck={isCheck}
              onCheck={onCheck}
              // selectedLabels={selectedLabels}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddLabelsToNote;

const styles = StyleSheet.create({
  labelCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },

  labelNames: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    marginLeft: 25,
  },
  checkBoxStyle: {
    marginLeft: 150,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#97e5fb',
    padding: 15,
  },
  seachLabelBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 17,
    color: '#fff',
    width: '80%',
    height: 50,
    marginLeft: 10,
  },
});

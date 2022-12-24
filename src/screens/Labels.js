import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUid} from '../hooks/useUid';
import {fetchLabel} from '../services/LabelsServices';

const LeftIcon = ({onPress}) => {
  return <Icons name="arrow-left" size={25} color="#fff" onPress={onPress} />;
};
const labelData = [
  {name: 'Label 1', id: 1},
  {name: 'Label 2', id: 2},
  {name: 'Label 3', id: 3},
  {name: 'Label 4', id: 4},
  {name: 'Label 5', id: 5},
];

const LabelCheck = ({data, onCheck, selectedLabels}) => {
  const labelStr = data.id + '|' + data.name;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>
      <Text>{data.name}</Text>
      <CheckBox
        value={selectedLabels.includes(labelStr) ? true : false}
        onValueChange={() => onCheck(labelStr)}
      />
    </View>
  );
};

const Labels = ({navigation}) => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const goToAddNotes = useCallback(
    () => navigation.navigate('AddNotes', {data: selectedLabels}),
    [navigation, selectedLabels],
  );
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <LeftIcon onPress={goToAddNotes} />,
  //   });
  // }, [navigation, goToAddNotes]);

  const onCheck = item => {
    const index = selectedLabels.indexOf(item);
    if (index === -1) {
      setSelectedLabels(prev => [...prev, item]);
    } else {
      const selected = [...selectedLabels];
      selected.splice(index, 1);
      setSelectedLabels(selected);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#97e5fb', padding: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNotes', {data: selectedLabels});
          }}>
          <Icons name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter label name"
          placeholderTextColor="#f2f2f2"
          style={{
            fontSize: 17,
            color: '#fff',
            width: '80%',
            height: 50,
            marginLeft: 10,
          }}
        />
      </View>
      {labelData.map(itm => (
        <LabelCheck
          key={itm.id}
          data={itm}
          onCheck={onCheck}
          selectedLabels={selectedLabels}
        />
      ))}
    </View>
  );
};

export default Labels;

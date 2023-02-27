import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUid} from '../hooks/useUid';
import {fetchLabel} from '../services/LabelsServices';
import {labelList} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import {styles} from '../utility/ExternalStyles/CommomStyles';

const LabelCheck = ({data, onCheck, isCheck}) => {
  return (
    <View style={styles.labelCheckContainer}>
      <Icons name="label-outline" size={Sizes.normalBtn} color={Colors.white} />
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
  const labels_list = useSelector(state => state.labels_list);
  const dispatch = useDispatch();
  const noteId = route.params?.noteId;
  const userId = useUid();

  const getLabels = async () => {
    let data = await fetchLabel(userId);
    dispatch(labelList(data));
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
          <Icons
            name="arrow-left"
            size={Sizes.normalBtn}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter label name"
          placeholderTextColor={Colors.lightWhite}
          style={styles.searchInput}
        />
      </View>
      <ScrollView>
        <View style={{marginTop: Sizes.smallBtn}}>
          {labels_list.map(itm => (
            <LabelCheckWithMemo
              key={itm.id}
              data={itm}
              isCheck={isCheck}
              onCheck={onCheck}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddLabelsToNote;

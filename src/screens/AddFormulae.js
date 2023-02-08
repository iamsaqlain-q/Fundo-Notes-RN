import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import {styles} from '../utility/ExternalStyles/CommomStyles';

const FormulaCheck = ({data, onCheck, isCheck}) => {
  return (
    <View style={styles.labelCheckContainer}>
      <Icons name="math-compass" size={Sizes.normalBtn} color={Colors.white} />
      <Text style={styles.labelNames}>{data.formula}</Text>
      <View style={styles.checkBoxStyle}>
        <CheckBox value={isCheck(data)} onValueChange={() => onCheck(data)} />
      </View>
    </View>
  );
};

const FormulaCheckWithMemo = React.memo(FormulaCheck);

const AddFormulae = ({navigation, route}) => {
  const formulae = [
    {
      id: 1,
      formula: 'Quadratic formula',
    },
    {
      id: 2,
      formula: 'Trinomial Equation',
    },
    {
      id: 3,
      formula: 'Integral',
    },
  ];

  const [selectedFormula, setSelectedFormula] = useState([]);
  const noteId = route.params?.noteId;

  const onCheck = useCallback(
    item => {
      const index = selectedFormula.indexOf(item);
      if (index === -1) {
        setSelectedFormula(prev => [...prev, item]);
      } else {
        const selected = [...selectedFormula];
        selected.splice(index, 1);
        setSelectedFormula(selected);
      }
    },
    [selectedFormula],
  );

  const isCheck = useCallback(
    dataStr => {
      return selectedFormula.includes(dataStr);
    },
    [selectedFormula],
  );
  return (
    <View style={styles.container}>
      <View style={styles.seachLabelBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNotes', {
              labelData: selectedFormula,
              noteId: noteId,
            });
          }}>
          <Icons
            name="arrow-left"
            size={Sizes.normalBtn}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginTop: Sizes.smallBtn}}>
          {formulae.map(itm => (
            <FormulaCheckWithMemo
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

export default AddFormulae;

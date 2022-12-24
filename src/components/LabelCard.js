import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUid} from '../hooks/useUid';
import {editLabel} from '../services/LabelsServices';

const LabelCard = ({item, getLabels, label}) => {
  //console.log('Item in notecard', item.id);
  //console.log('Labels', item.label);
  const userId = useUid();
  const [changeIcon, setChangeIcon] = useState(true);
  const [labelName, setLabelName] = useState(item.label);

  const handleEditLabel = async () => {
    const labelId = item.id;
    setChangeIcon(!changeIcon);
    if (labelName !== '') {
      await editLabel(labelName, userId, labelId, label);
      await getLabels();
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View
        style={[
          styles.cardAlignment,
          {
            borderColor: changeIcon ? null : '#4ebef4',
            borderTopWidth: changeIcon ? null : 1,
          },
        ]}>
        <TouchableOpacity>
          <Icon
            name={changeIcon ? 'label-outline' : 'trash-can-outline'}
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
        <TextInput
          style={styles.labelText}
          value={labelName}
          onChangeText={text => {
            setLabelName(text);
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              handleEditLabel();
            }}>
            <Icon
              name={changeIcon ? 'pencil' : 'check'}
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LabelCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelText: {
    fontSize: 20,
    color: '#fff',
    marginLeft: -130,
  },

  cardAlignment: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});

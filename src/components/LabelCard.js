import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LabelCard = ({item}) => {
  console.log('Item in notecard', item);
  return (
    
    <View style={styles.cardContainer}>
      <View>
        <Icon name="label-outline" size={25} color="#fff" />
        <Text style={styles.labelText}>{item}</Text>
        <Icon name="pencil" size={25} color="#fff" />
      </View>
    </View>
  );
};
export default LabelCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  labelText: {
    color: '#fff',
    fontSize: 20,
  },
});

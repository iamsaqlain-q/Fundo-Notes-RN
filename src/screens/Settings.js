import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TrashTopBar from '../components/TrashTopBar';
import Colors from '../constants/Colors';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLang} from '../redux/actions';
import stringsOfLanguages from '../utility/Localization/Translation';
import Sizes from '../constants/Sizes';

const Settings = ({navigation}) => {
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();
  return (
    <View style={styles.trashContainer}>
      <View style={{flex: 1, padding: 20}}>
        <TrashTopBar
          name={
            toggle
              ? stringsOfLanguages._props.en.settings
              : stringsOfLanguages._props.urdu.settings
          }
        />
      </View>
      <View style={styles.optionView}>
        <Text style={styles.optionTxt}>More Options</Text>
      </View>
      <View style={styles.listStyle}>
        <View style={styles.todoView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DataChart');
            }}>
            <Text style={styles.itemView}>
              {toggle
                ? stringsOfLanguages._props.en.datacharts
                : stringsOfLanguages._props.urdu.datacharts}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SourceCode');
            }}>
            <Text style={styles.itemView}>
              {toggle
                ? stringsOfLanguages._props.en.sourcecode
                : stringsOfLanguages._props.urdu.sourcecode}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoView}>
          <View>
            <Text style={styles.itemView}>
              {toggle
                ? stringsOfLanguages._props.en.chooselang
                : stringsOfLanguages._props.urdu.chooselang}
              :
            </Text>
            <View style={styles.langContainer}>
              <TouchableOpacity
                style={[
                  styles.langBtn,
                  {
                    backgroundColor: toggle ? Colors.backColor : Colors.white,
                    borderColor: toggle ? Colors.white : Colors.backColor,
                  },
                ]}
                onPress={() => {
                  dispatch(toggleLang(toggle));
                }}>
                <Text
                  style={[
                    styles.langTxt,
                    {color: toggle ? Colors.white : Colors.backColor},
                  ]}>
                  Eng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.langBtn,
                  {
                    backgroundColor: toggle ? Colors.white : Colors.backColor,
                    borderColor: toggle ? Colors.backColor : Colors.white,
                  },
                ]}
                onPress={() => {
                  dispatch(toggleLang(toggle));
                }}>
                <Text
                  style={[
                    styles.langTxt,
                    {color: toggle ? Colors.backColor : Colors.white},
                  ]}>
                  Urdu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  trashContainer: {
    flex: 1,
    backgroundColor: Colors.lightWhite,
  },

  listStyle: {
    flex: 13,
    width: '100%',
    marginVertical: 10,
    //marginHorizontal: 10,
  },
  todoView: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.taskBorder,
  },

  itemView: {
    backgroundColor: Colors.mainColor,
    width: 330,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: Colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  langContainer: {
    marginTop: -36,
    marginLeft: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langBtn: {
    width: '13%',
    borderRadius: 11,
    margin: '0.5%',
    borderWidth: 2,
  },
  langTxt: {
    fontSize: 13,
    textAlign: 'center',
    padding: 5,
  },
  optionView: {
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  optionTxt: {
    textAlign: 'center',
    color: Colors.backColor,
    fontSize: Sizes.smallBtn,
    fontWeight: 'bold',
  },
});

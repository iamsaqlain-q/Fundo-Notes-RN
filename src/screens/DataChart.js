/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {fetchNote} from '../services/NotesServices';
import {useUid} from '../hooks/useUid';
import {Text} from 'react-native';
import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import {StyleSheet} from 'react-native';

const DataChart = ({navigation}) => {
  const [chartData, setChartData] = useState([]);
  const [trashData, setTrashData] = useState([]);
  const [archiveData, setArchiveData] = useState([]);
  const [pinnedData, setPinnedData] = useState([]);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const totalNotes = chartData.length;
  const trashNotes = trashData.length;
  const archiveNotes = archiveData.length;
  const pinnedNotes = pinnedData.length;
  console.log('length', totalNotes, trashNotes, archiveNotes, pinnedNotes);

  const array = [
    {
      name: 'Pinned Notes',
      count: pinnedNotes,
      color: 'yellow',
    },
    {
      name: 'Archived Notes',
      count: archiveNotes,
      color: 'green',
    },

    {
      name: 'Trash Notes',
      count: trashNotes,
      color: 'purple',
    },

    {
      name: 'Total Notes',
      count: totalNotes,
      color: 'navy',
    },
  ];
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const userId = useUid();

  const getAllNotes = async () => {
    const notes = await fetchNote(userId);
    setChartData(notes);
    notes.forEach(data => {
      if (data.isInTrash) {
        trashData.push(data);
      }
      setTrashData(trashData);
      if (data.isInArchive) {
        archiveData.push(data);
      }
      setArchiveData(archiveData);
      if (data.isPinned) {
        pinnedData.push(data);
      }
      setPinnedData(pinnedData);
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllNotes();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <View style={styles.conatiner}>
      <View style={styles.textView}>
        <Text style={styles.txt}>Notes Data</Text>
      </View>
      <PieChart
        data={array}
        width={screenWidth}
        height={230}
        chartConfig={chartConfig}
        accessor={'count'}
        backgroundColor={'transparent'}
        center={[10, 0]}
        absolute
      />
    </View>
  );
};
export default DataChart;

const styles = StyleSheet.create({
  conatiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textView: {width: '100%', backgroundColor: Colors.mainColor, padding: 5},
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Sizes.bigBtn,
    color: Colors.backColor,
  },
});

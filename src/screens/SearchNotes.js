import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigations/AuthProvider';
import {fetchNote} from '../services/NotesServices';

const SearchNotes = ({navigation}) => {
  const [input, setInput] = useState();
  const [searchData, setSearchData] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);

  const {user} = useContext(AuthContext);

  const getSearchedNotes = async () => {
    const data = await fetchNote(user.uid);
    setSearchData(data);
  };

  const handleInput = text => {
    setInput(text);

    let searchItems = searchData.filter(
      item =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchedNotes(searchItems);
    //console.log('Searched Notes:', searchedNotes);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSearchedNotes();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchTopBar}>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            value={input}
            onChangeText={handleInput}
            autoFocus={true}
            placeholder="Search your notes"
            placeholderTextColor="#f2f2f2"
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={{padding: 20}}>
        <FlatList
          data={searchedNotes}
          keyExtractor={item => item.id}
          key={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity key={index}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SearchNotes;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  searchTopBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#97e5fb',
    padding: 10,
  },

  textInput: {
    fontSize: 17,
    height: 50,
    marginLeft: 10,
  },
});

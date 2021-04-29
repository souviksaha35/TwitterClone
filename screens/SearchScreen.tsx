import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { SearchBar } from 'react-native-elements';

const { height, width } = Dimensions.get('screen');

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <View style={{ alignItems: 'center' }}>
            <SearchBar
            placeholder="Type Here..."
            onChangeText={(text) => setSearch(text)}
            value={search}
            lightTheme={true}
            containerStyle={{
                width: width / 2,
                borderRadius: 50,
            }}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
      height: 60,
      width: width,
      backgroundColor: 'grey',
  },
  searchContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 25,
      width: 50,
      height: 20,
      backgroundColor: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

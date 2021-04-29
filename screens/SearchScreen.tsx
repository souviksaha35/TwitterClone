import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { SearchBar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
const { height, width } = Dimensions.get('screen');

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, {backgroundColor: Colors.light.tint}]}>
      <AntDesign name="twitter" size={60} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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

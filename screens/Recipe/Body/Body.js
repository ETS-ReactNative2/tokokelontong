import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../../constants';

const Body = ({item}) => <ItemVertical item={item} />;

const ItemVertical = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.boxList} onPress={() => navigation.navigate('DetailRecipe')}>
      <Image source={{uri: item.uri}} style={styles.image} resizeMode="cover" />
      <View style={styles.boxDesc}>
        <Text style={styles.resep}>Resep {`${item.resep.slice(0, 15)}...`}</Text>
        <Text style={styles.by}>by : {item.by}</Text>
        <Text style={styles.totalResep}>Total Resep : {item.total}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boxList: {
    backgroundColor: COLORS.white,
    height: 110,
    marginEnd: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'green',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 50,
  },
  image: {
    width: 90,
    height: '100%',
    borderRadius: 8,
    marginRight: 20,
  },
  boxDesc: {
    flex: 1,
    marginRight: 5,
    justifyContent: 'space-evenly',
    height: '100%',
  },
  resep: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 16,
    color: COLORS.dimGray,
  },
  by: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: COLORS.dimGray,
  },
  totalResep: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: COLORS.forestGreenCrayolan,
  },
});

export default Body;

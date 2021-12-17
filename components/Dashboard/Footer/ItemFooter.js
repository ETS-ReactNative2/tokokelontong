import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../src/config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemFooter = ({item}) => {
  return <Item item={item} />;
};

const Item = ({item}) => (
  <View style={styles.containerItem}>
    <View style={styles.boxItem}>
      <View style={styles.boxDesc}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.textHarga}>
          <Text style={styles.harga}>{item.hargaNormal}</Text>
          <Text> / {item.hargaDiskon}</Text>
        </Text>
        <View style={styles.boxChart}>
          <View style={styles.minus}>
            <Icon name="minus" size={15} color="#fff" />
          </View>
          <Text style={styles.total}>0</Text>
          <View style={styles.add}>
            <Icon name="plus" size={15} color="#fff" />
          </View>
        </View>
      </View>
    </View>
    <View style={styles.boxImage}>
      <Image source={item.image} style={styles.image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 20,
    marginEnd: 20,
  },
  boxItem: {
    backgroundColor: colors.forestGreenCrayolan,
    height: 120,
    width: 250,
    borderRadius: 15,
  },
  boxDesc: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 100,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.white,
  },
  textHarga: {
    fontSize: 18,
    fontFamily: 'Aesthet Nova Regular',
    marginTop: 8,
  },
  harga: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  boxChart: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  minus: {
    backgroundColor: '#0a4823',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginEnd: 15,
    borderRadius: 8,
  },
  total: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 18,
  },
  add: {
    backgroundColor: '#0a4823',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginStart: 15,
    borderRadius: 8,
  },
  boxImage: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  image: {
    height: 90,
    width: 120,
  },
});

export default ItemFooter;
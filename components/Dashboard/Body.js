import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ItemBody } from '.';
import { IMAGE } from '../../constants';

const data = [
  {
    title: 'Penyeduh Kopi',
    image: IMAGE.coffemaker,
    harga: '5000k',
    new: '1',
  },
  {
    title: 'Teko',
    image: IMAGE.teapot,
    harga: '200k',
    new: '1',
  },
  {
    title: 'Penumbuk Kopi',
    image: IMAGE.harioskerton,
    harga: '6000k',
    new: '0',
  },
  {
    title: 'Bubuk Kopi',
    image: IMAGE.coffpowder,
    harga: '100k',
    new: '0',
  },
  {
    title: 'Teko Panjang',
    image: IMAGE.longteapot,
    harga: '300k',
    new: '0',
  },
];

const Header = () => {
  return (
    <View style={styles.boxHeader}>
      <Text style={styles.titleLeft}>Produk Terbaru</Text>
      <Text style={styles.titleRight}>view all</Text>
    </View>
  );
};

const RenderBody = () => {
    return (
      <View style={styles.container}>
        <Header />
        <View>
          <FlatList
            data={data}
            renderItem={ItemBody}
            keyExtractor={item => item.title}
            horizontal={true}
            style={{
              marginTop: 30,
            }}
            contentContainerStyle={{
              paddingLeft: 20,
              paddingRight: 1,
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  boxHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLeft: {
    fontSize: 20,
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
  titleRight: {
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
});

export default RenderBody;
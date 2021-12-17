import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ItemBody } from '.';
import { HeaderBox } from '..';
import { IMAGE } from '../../../constants';

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

const RenderBody = () => {
    return (
      <View style={styles.container}>
        <HeaderBox textLeft={'Produk Terbaru'} textRight={'view all'} />
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
});

export default RenderBody;
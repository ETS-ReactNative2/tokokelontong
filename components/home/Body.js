import React, { Component } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const data = [
  {
    title: 'Penyeduh Kopi',
    image: require('../../src/image/home/coffemaker.png'),
    harga: '5000k',
    new: '1',
  },
  {
    title: 'Teko',
    image: require('../../src/image/home/teapot.png'),
    harga: '200k',
    new: '1',
  },
  {
    title: 'Penumbuk Kopi',
    image: require('../../src/image/home/harioskerton.png'),
    harga: '6000k',
    new: '0',
  },
  {
    title: 'Bubuk Kopi',
    image: require('../../src/image/home/coffepowder.png'),
    harga: '100k',
    new: '0',
  },
  {
    title: 'Teko Panjang',
    image: require('../../src/image/home/longteapot.png'),
    harga: '300k',
    new: '0',
  },
];

export const Body = () => {
    return (
      <View
        style={{
          marginTop: 40,
        }}>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Aesthet Nova Regular',
              color: '#656565',
            }}>
            Produk Terbaru
          </Text>
          <Text
            style={{
              fontFamily: 'Aesthet Nova Regular',
              color: '#656565',
            }}>
            view all
          </Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
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

const renderItem = ({item}) => {
  return <Item item={item} />;
};

const Item = ({item}) => (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 1,
        elevation: 4,
        marginEnd: 19
      }}>
      <Image
        style={{
          height: 100,
          width: 110,
        }}
        source={item.image}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          fontFamily: 'Aesthet Nova Regular',
          color: '#656565',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          marginTop: 3,
          fontSize: 12,
          fontFamily: 'Aesthet Nova Regular',
          color: '#656565',
        }}>
        {item.harga}
      </Text>
      {item.new === '1' ? (
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#f44336',
            width: 40,
            top: 0,
            right: 0,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Aesthet Nova Bold',
              color: '#fff',
              fontSize: 10,
            }}>
            New
          </Text>
        </View>
      ) : (
        <View />
      )}
    </View>
);
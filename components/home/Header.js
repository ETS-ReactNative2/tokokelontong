import React, {Component, useEffect, useState} from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    title: 'Sayuran',
    image: require('../../src/image/home/veggie.png'),
  },
  {
    title: 'Jajanan',
    image: require('../../src/image/home/snack.png'),
  },
  {
    title: 'Alat Tulis',
    image: require('../../src/image/home/stationery.png'),
  },
  {
    title: 'Obat',
    image: require('../../src/image/home/medical.png'),
  },
  {
    title: 'Online Pay',
    image: require('../../src/image/home/payment.png'),
  },
];

export const Header = ({flex}) => {
  const [search, setSearch] = useState('');
  const [parentHeight, setParentHeight] = useState(0);

  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: 15,
        flex: flex
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontFamily: 'Aesthet Nova Black',
          }}>
          Toko Kelontong
        </Text>
        <Icon name="map-marker" size={25} color="#fff" />
      </View>
      <View
        onLayout={onLayout}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
          height: 40,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 10,
            flex: 1,
            marginRight: 20,
          }}>
          <Icon name="magnify" size={25} color="#656565" />
          <TextInput
            value={search}
            onChangeText={search => setSearch(search)}
            style={{}}
            placeholder="Cari barang"
            style={{
              color: '#656565',
              marginLeft: 5,
              fontFamily: 'Aesthet Nova Regular',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: parentHeight,
            height: parentHeight,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="camera" size={20} color="#656565" />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        style={{
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 1,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const renderItem = ({item}) => {
    return (
        <Item item={item} />
    )
}

const Item = ({item}) => (
  <View
    style={{
      backgroundColor: '#fff',
      marginEnd: 19,
      paddingHorizontal: 10,
      paddingTop: 15,
      paddingBottom: 10,
      borderRadius: 10,
      elevation: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
      marginLeft: 1,
    }}>
    <Image
      style={{
        height: 70,
        width: 80,
      }}
      source={item.image}
    />
    <Text
      style={{
        marginTop: 15,
        fontSize: 13,
        fontFamily: 'Aesthet Nova Regular',
      }}>
      {item.title}
    </Text>
  </View>
);
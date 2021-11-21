import React, {Component, useState} from 'react';
import {Dimensions, FlatList, Image, StatusBar, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    title: 'Salad Buah',
    image: require('../../src/image/home/salad.png'),
    hargaNormal: '20k',
    hargaDiskon: '15k',
  },
  {
    title: 'Tiramisu',
    image: require('../../src/image/home/tiramisu.png'),
    hargaNormal: '30k',
    hargaDiskon: '20k',
  },
  {
    title: 'Pudding',
    image: require('../../src/image/home/pudding.png'),
    hargaNormal: '50k',
    hargaDiskon: '30k',
  },
  {
    title: 'Roti Enak',
    image: require('../../src/image/home/croissant.png'),
    hargaNormal: '5k',
    hargaDiskon: '3k',
  },
  {
    title: 'Bubuk Kopi',
    image: require('../../src/image/home/coffe.png'),
    hargaNormal: '15k',
    hargaDiskon: '8k',
  },
];

export const Footer = ({flex}) => {
    return (
      <View
        style={{
          height: 50,
          marginTop: 0,
          flex: flex,
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
            Diskon Hari Ini !
          </Text>
          <Text
            style={{
              fontFamily: 'Aesthet Nova Regular',
              color: '#656565',
            }}>
            view all
          </Text>
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
}

const renderItem = ({item}) => {
  return <Item item={item} />;
};

const Item = ({item}) => (
  <View
    style={{
      paddingTop: 20,
      marginEnd: 20,
    }}>
    <View
      style={{
        backgroundColor: '#acd792',
        height: 120,
        width: 250,
        borderRadius: 15,
      }}>
      <View
        style={{
          marginTop: 20,
          marginLeft: 15,
          marginRight: 100,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Aesthet Nova Regular',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Aesthet Nova Regular',
            marginTop: 8,
          }}>
          <Text
            style={{
              textDecorationLine: 'line-through',
              color: 'red',
            }}>
            {item.hargaNormal}
          </Text>
          <Text> / {item.hargaDiskon}</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#0a4823',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginEnd: 15,
              borderRadius: 8,
            }}>
            <Icon name="minus" size={15} color="#fff" />
          </View>
          <Text
            style={{
              fontFamily: 'Aesthet Nova Regular',
              fontSize: 18
            }}>
            1
          </Text>
          <View
            style={{
              backgroundColor: '#0a4823',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginStart: 15,
              borderRadius: 8,
            }}>
            <Icon name="plus" size={15} color="#fff" />
          </View>
        </View>
      </View>
    </View>
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 5,
      }}>
      <Image
        source={item.image}
        style={{
          height: 90,
          width: 120,
        }}
      />
    </View>
  </View>
);
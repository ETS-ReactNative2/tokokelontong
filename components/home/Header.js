import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

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

export const Header = () => {
  return (
    <View>
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
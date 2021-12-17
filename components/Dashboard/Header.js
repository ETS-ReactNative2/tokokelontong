import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { IMAGE } from '../../constants';

const data = [
  {
    title: 'Sayuran',
    image: IMAGE.veggie,
  },
  {
    title: 'Jajanan',
    image: IMAGE.snack,
  },
  {
    title: 'Alat Tulis',
    image: IMAGE.stationery,
  },
  {
    title: 'Obat',
    image: IMAGE.medical,
  },
  {
    title: 'Online Pay',
    image: IMAGE.payment,
  },
];

const RenderHeader = () => {
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
  <View style={styles.containerItem}>
    <Image style={styles.image} source={item.image} />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#fff',
    marginEnd: 19,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    elevation: 4,
    shadowColor: 'green',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 1,
    borderWidth: 0.3,
    borderColor: '#acd792',
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 80,
  },
  title: {
    marginTop: 15,
    fontSize: 13,
    fontFamily: 'Aesthet Nova Regular',
  }
});

export default RenderHeader;
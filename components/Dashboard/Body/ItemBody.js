import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ItemBody = ({item}) => {
    return <Item item={item} />;
}

const Item = ({item}) => (
  <View style={styles.containerItem}>
    <Image style={styles.image}
      source={item.image}
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.harga}>{item.harga}</Text>
    {item.new === '1' && (
      <View style={styles.badge}>
        <Text style={styles.titleBadge}>New</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
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
    shadowColor: 'green',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 50,
    borderWidth: 0.3,
    borderColor: '#acd792',
    marginEnd: 19,
  },
  image: {
    height: 100,
    width: 110,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
  harga: {
    marginTop: 3,
    fontSize: 12,
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#f44336',
    width: 40,
    top: 0,
    right: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  titleBadge: {
    fontFamily: 'Aesthet Nova Bold',
    color: '#fff',
    fontSize: 10,
  },
});

export default ItemBody;
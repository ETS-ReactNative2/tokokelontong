import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const ItemHeader = ({item}) => <ItemHorizontal item={item} />;

const ItemHorizontal = ({item}) => {
  return (
    <ImageBackground
      imageStyle={{
        borderRadius: 10,
      }}
      source={{
        uri: item.uri,
      }}
      style={styles.imageBackground}>
      <View
        style={[
          styles.coupon,
          {borderTopRightRadius: 50, borderBottomRightRadius: 50},
        ]}
      />
      <View
        style={[
          styles.coupon,
          {
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
          },
        ]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: 280,
    height: 130,
    marginTop: 15,
    marginEnd: 10,
    marginBottom: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coupon: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
  },
});

export default ItemHeader;

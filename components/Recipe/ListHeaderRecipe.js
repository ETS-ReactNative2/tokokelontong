import React, {useContext, useEffect, useState} from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';

const data = [
  {
    uri: 'https://img.freepik.com/free-vector/abstract-hand-drawn-recipes-youtube-channel-art_23-2148890379.jpg?size=626&ext=jpg',
  },
  {
    uri: 'https://image.freepik.com/free-vector/creative-world-food-day-background_23-2147927637.jpg',
  },
  {
    uri: 'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg?size=626&ext=jpg',
  },
  {
    uri: 'https://st.depositphotos.com/3470617/4866/v/950/depositphotos_48661143-stock-illustration-fast-food-set.jpg',
  },
  {
    uri: 'https://static.vecteezy.com/system/resources/previews/000/134/503/non_2x/free-vector-food-illustration.jpg',
  },
];
export const ListHeaderRecipe = () => {
    return (
      <FlatList
        data={data}
        renderItem={RenderItemHorizontal}
        horizontal={true}
        contentContainerStyle={{
          paddingLeft: 10,
        }}
        showsHorizontalScrollIndicator={false}
      />
    );
}

const RenderItemHorizontal = ({item}) => <ItemHorizontal item={item} />;

const ItemHorizontal = ({item}) => {
  return (
    <ImageBackground
      imageStyle={{
        borderRadius: 10,
      }}
      source={{
        uri: item.uri,
      }}
      style={{
        width: 280,
        height: 130,
        marginTop: 15,
        marginEnd: 10,
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    </ImageBackground>
  );
};
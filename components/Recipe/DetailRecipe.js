import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailRecipe = ({route}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Aesthet Nova Bold',
          fontSize: 18,
        }}>
        Detail Recipe
      </Text>
      <Text>{route.params.nama}</Text>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('BottomTab', {
            screen: 'User',
          })
        }}
      />
    </View>
  );
};

export default DetailRecipe;
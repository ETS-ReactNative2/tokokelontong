import React, { useContext, useEffect } from 'react';
import {BackHandler, Text, View} from 'react-native';

export const DetailRecipe = ({navigations, route}) => {
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
    </View>
  );
};

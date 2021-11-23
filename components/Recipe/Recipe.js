import React from 'react';
import {Text, View} from 'react-native';

export const Recipe = () => {
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
        Recipe
      </Text>
    </View>
  );
};

import React from 'react';
import { Text, View } from 'react-native';

export const Cart = () => {
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
            fontSize: 18
          }}>
          Cart
        </Text>
      </View>
    );
}
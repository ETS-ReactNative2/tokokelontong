import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import {BackHandler, Button, Text, View} from 'react-native';
import { colorContext } from '../BottomTab';

export const DetailRecipe = ({route}) => {
  const navigation = useNavigation();
  // const {colorBackground, setColorBackground} = useContext(colorContext);

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     console.log('back dari detail');
  //   });
  //   return () => {
  //     BackHandler.removeEventListener();
  //   };
  // }, []);

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
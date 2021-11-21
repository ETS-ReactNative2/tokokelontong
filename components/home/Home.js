import React, { Component, useState } from 'react';
import {Dimensions, StatusBar, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header, size } from './Header';

export const Home = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        //   marginBottom: 60
        }}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="#acd792"
        />
        <View
          style={{
            height: 170,
            width: Dimensions.get('screen').width,
            backgroundColor: '#acd792',
            borderBottomLeftRadius: 50,
          }}
        />
        <Header flex={1} />
        <Body flex={1.2} />
        <Footer flex={1} />
      </View>
    );
}
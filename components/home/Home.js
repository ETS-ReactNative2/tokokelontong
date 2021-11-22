import React, { Component, useState } from 'react';
import {Dimensions, KeyboardAvoidingView, ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header, size } from './Header';
import { Search } from './Search';

export const Home = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="#acd792"
        />
        <View
          style={{
            height: 150,
            width: Dimensions.get('screen').width,
            backgroundColor: '#acd792',
            borderBottomLeftRadius: 30,
          }}
        />
        <Search />
        <ScrollView showsVerticalScrollIndicator={false} >
          <Header />
          <Body />
          <Footer />
        </ScrollView>
      </View>
    );
}
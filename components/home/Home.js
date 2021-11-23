import React from 'react';
import {Dimensions, ScrollView, StatusBar, View} from 'react-native';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
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
            height: 130,
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
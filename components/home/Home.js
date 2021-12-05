import React from 'react';
import {Dimensions, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import { colors } from '../../src/config/colors';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Search } from './Search';

export const Home = () => {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} barStyle="light-content" backgroundColor={colors.forestGreenCrayolan} />
        <View
          style={styles.boxHeader}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxHeader: {
    height: 130,
    width: Dimensions.get('screen').width,
    backgroundColor: colors.forestGreenCrayolan,
    borderBottomLeftRadius: 30,
  },
});
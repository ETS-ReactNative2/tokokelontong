import React from 'react';
import {Dimensions, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import { COLORS } from '../../constants';
import { RenderBody } from './Body';
import { RenderFooter } from './Footer';
import { RenderHeader } from './Header';
import { RenderSearch } from './Search';

const Home = () => {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} barStyle="light-content" backgroundColor={COLORS.forestGreenCrayolan} />
        <View style={styles.boxHeader} />
        <RenderSearch />
        <ScrollView showsVerticalScrollIndicator={false} >
          <RenderHeader />
          <RenderBody />
          <RenderFooter />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boxHeader: {
    height: 130,
    width: Dimensions.get('screen').width,
    backgroundColor: COLORS.forestGreenCrayolan,
    borderBottomLeftRadius: 30,
  },
});

export default Home;
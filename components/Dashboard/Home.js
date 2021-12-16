import React from 'react';
import {Dimensions, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import { RenderBody, RenderFooter, RenderSearch, RenderHeader} from '.';
import { colors } from '../../src/config/colors';

const Home = () => {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} barStyle="light-content" backgroundColor={colors.forestGreenCrayolan} />
        <View
          style={styles.boxHeader}
        />
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
    backgroundColor: '#fff',
  },
  boxHeader: {
    height: 130,
    width: Dimensions.get('screen').width,
    backgroundColor: colors.forestGreenCrayolan,
    borderBottomLeftRadius: 30,
  },
});

export default Home;
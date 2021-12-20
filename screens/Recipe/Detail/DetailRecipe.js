import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../../constants';

const DetailRecipe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.black,
    fontFamily: 'Aesthet Nova Bold',
    fontSize: 18,
  },
});

export default DetailRecipe;
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontFamily: 'Aesthet Nova Bold',
    fontSize: 18,
  },
});

export default DetailRecipe;
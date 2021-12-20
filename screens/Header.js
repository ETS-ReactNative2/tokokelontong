import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';

const Header = ({text}) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: COLORS.forestGreenCrayolan,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.white,
  },
});

export default Header;
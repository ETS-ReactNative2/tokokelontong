import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../src/config/colors';

const Header = ({text}) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.forestGreenCrayolan,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.white,
  },
});

export default Header;
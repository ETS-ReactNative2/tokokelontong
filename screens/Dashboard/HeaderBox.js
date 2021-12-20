import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../constants';

const HeaderBox = ({textLeft, textRight}) => {
  return (
    <View style={styles.boxHeader}>
      <Text style={styles.titleLeft}>{textLeft}</Text>
      <Text style={styles.titleRight}>{textRight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLeft: {
    fontSize: 20,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  titleRight: {
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
});

export default HeaderBox;
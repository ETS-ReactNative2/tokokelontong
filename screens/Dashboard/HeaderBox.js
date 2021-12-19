import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    color: '#656565',
  },
  titleRight: {
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
});

export default HeaderBox;
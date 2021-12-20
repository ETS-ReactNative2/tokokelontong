import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';

const Location = () => {
  return (
    <View style={styles.containerLocation}>
      <View style={styles.containerMaps}>
        <Icon name="google-maps" color={COLORS.red} size={22} />
        <Text style={styles.location}>Jawa Tengah, Surakarta, Sondakan</Text>
      </View>
      <Icon name="chevron-right" color={COLORS.dimGray} size={22} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
  },
  containerMaps: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
});

export default Location;
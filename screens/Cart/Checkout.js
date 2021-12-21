import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import { data } from '.';
import { COLORS, FONTS } from '../../constants';

const Checkout = ({all, setAll}) => {
  const total = () => {
    let total = 0;
    data.map(value => {
      total += value.jumlah * value.harga;
    });
    return total;
  };

  return (
    <View style={styles.containerCheckout}>
      <View style={styles.containerAll}>
        <RadioButton
          value="first"
          status={all === 'all' ? 'checked' : 'unchecked'}
          onPress={() => setAll('all')}
          color={COLORS.dimGray}
        />
        <Text style={[styles.textAll, FONTS.h4]}>Semua</Text>
      </View>
      <View style={styles.containerTotal}>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={[FONTS.h4, {color: COLORS.dimGray}]}>Total</Text>
          <Text style={[{color: COLORS.red}, FONTS.h4]}>Rp. {total()}</Text>
        </View>
        <View style={styles.containerButtonCheckout}>
          <Text style={[{color: COLORS.white}, FONTS.h4]}>Checkout</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerCheckout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  containerAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAll: {
    marginLeft: 5,
    color: COLORS.dimGray,
  },
  containerTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  containerButtonCheckout: {
    backgroundColor: COLORS.darkSpringGreen,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Checkout;
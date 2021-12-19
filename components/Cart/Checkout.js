import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import { data } from '.';
import { COLORS } from '../../constants';

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
        <Text style={styles.textAll}>Semua</Text>
      </View>
      <View style={styles.containerTotal}>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.harga}>Rp. {total()}</Text>
        </View>
        <View style={styles.containerButtonCheckout}>
          <Text style={styles.checkout}>Checkout</Text>
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
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  containerTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  total: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  harga: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: 'red',
  },
  containerButtonCheckout: {
    backgroundColor: COLORS.darkSpringGreen,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  checkout: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.white,
  },
});

export default Checkout;
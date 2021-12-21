import React, {useState} from 'react';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { data } from '.';
import { COLORS, FONTS, ICONS } from '../../constants';

const RenderCart = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ItemCart item={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
      }}
    />
  );
}

const ItemCart = ({item}) => {
  const [checked, setChecked] = useState(null);

  return (
    <View style={styles.containerItem}>
      <View style={styles.containerHeaderItem}>
        <View style={styles.containerHeaderLeft}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={COLORS.dimGray}
          />
          <Icon name="store" color={COLORS.dimGray} size={22} />
          <Text style={[styles.namaPenjual, FONTS.h5]}>{item.namaPenjual}</Text>
          <Icon name="chevron-right" color={COLORS.dimGray} size={22} />
        </View>
        <Text style={[styles.ubah, FONTS.h2]}>Ubah</Text>
      </View>
      <View style={styles.containerBodyItem}>
        <View>
          <View style={styles.containerImageRadio}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color={COLORS.dimGray}
            />
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        </View>
        <View>
          <Text style={[{color: COLORS.dimGray}, FONTS.h3]}>{item.order}</Text>
          <View style={styles.containerVarian}>
            <Text style={[styles.varian, FONTS.h1]}>
              Varian : {item.varian}
            </Text>
          </View>
          <View style={styles.boxHarga}>
            <Text style={[{color: COLORS.red}, FONTS.h6]}>Rp. {item.harga}</Text>
            <View style={styles.boxJumlah}>
              <View style={styles.boxMinus}>
                <Icon name="minus" color={COLORS.black} size={15} />
              </View>
              <Text style={[styles.jumlah, FONTS.h5]}>{item.jumlah}</Text>
              <View style={styles.boxPlus}>
                <Icon name="plus" color={COLORS.black} size={15} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerVoucher}>
        <View style={styles.containerVoucherIcon}>
          <Icon name={ICONS.ticket} color={COLORS.darkSpringGreen} size={15} />
          <Text style={[styles.voucher, FONTS.h2]}>
            Voucher Diskon s/d Rp10RB tersedia
          </Text>
        </View>
        <Icon name={ICONS.chevronRight} color={COLORS.dimGray} size={15} />
      </View>
      <View style={styles.cotainerShipping}>
        <Icon name={ICONS.truck} color={COLORS.darkSpringGreen} size={15} />
        <Text style={[styles.freeOngkir, FONTS.h2]}>
          Gratis Ongkir s/d Rp15.000 dengan min. belanja Rp. ...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: COLORS.white,
    marginBottom: 5,
    padding: 5,
  },
  containerHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomWidth: 0.8,
    borderColor: COLORS.culturedE,
  },
  containerHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  namaPenjual: {
    color: COLORS.dimGray,
    marginLeft: 10,
    marginRight: 5,
  },
  ubah: {
    color: COLORS.dimGray,
    marginRight: 10,
  },
  containerBodyItem: {
    flexDirection: 'row',
    paddingTop: 15,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: COLORS.culturedE,
  },
  containerImageRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 15,
    borderRadius: 5,
  },
  containerVarian: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  varian: {
    color: COLORS.dimGray,
    backgroundColor: COLORS.culturedE,
    padding: 5,
  },
  containerVoucher: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.8,
    borderColor: COLORS.culturedE,
    paddingHorizontal: 10,
  },
  containerVoucherIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voucher: {
    marginLeft: 10,
    color: COLORS.dimGray,
  },
  cotainerShipping: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  freeOngkir: {
    marginLeft: 10,
    flex: 1,
    color: COLORS.dimGray,
  },
  boxHarga: {
    marginTop: 20,
    marginBottom: 10,
  },
  boxJumlah: {
    flexDirection: 'row',
    marginTop: 15,
  },
  boxMinus: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.culturedE,
  },
  jumlah: {
    color: COLORS.dimGray,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.culturedE,
  },
  boxPlus: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.culturedE,
  },
});

export default RenderCart;
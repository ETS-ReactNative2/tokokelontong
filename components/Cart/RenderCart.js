import React, {useState} from 'react';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { data } from '.';
import { COLORS } from '../../constants';

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
          <Text style={styles.namaPenjual}>{item.namaPenjual}</Text>
          <Icon name="chevron-right" color={COLORS.dimGray} size={22} />
        </View>
        <Text style={styles.ubah}>Ubah</Text>
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
          <Text style={styles.order}>{item.order}</Text>
          <View style={styles.containerVarian}>
            <Text style={styles.varian}>Varian : {item.varian}</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Aesthet Nova Regular',
                color: 'red',
              }}>
              Rp. {item.harga}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0.5,
                  borderColor: '#eeeeee',
                }}>
                <Icon name="minus" color={'#000000'} size={15} />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Aesthet Nova Regular',
                  color: COLORS.dimGray,
                  paddingHorizontal: 15,
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  borderColor: '#eeeeee',
                }}>
                {item.jumlah}
              </Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0.5,
                  borderColor: '#eeeeee',
                }}>
                <Icon name="plus" color={'#000000'} size={15} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerVoucher}>
        <View style={styles.containerVoucherIcon}>
          <Icon
            name="ticket-confirmation-outline"
            color={COLORS.darkSpringGreen}
            size={15}
          />
          <Text style={styles.voucher}>Voucher Diskon s/d Rp10RB tersedia</Text>
        </View>
        <Icon name="chevron-right" color={COLORS.dimGray} size={15} />
      </View>
      <View style={styles.cotainerShipping}>
        <Icon name="truck" color={COLORS.darkSpringGreen} size={15} />
        <Text style={styles.freeOngkir}>Gratis Ongkir s/d Rp15.000 dengan min. belanja Rp. ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#fff',
    marginBottom: 5,
    padding: 5,
  },
  containerHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomWidth: 0.8,
    borderColor: '#eeeeee',
  },
  containerHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  namaPenjual: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
    marginLeft: 10,
    marginRight: 5,
  },
  ubah: {
    fontSize: 12,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
    marginRight: 10,
  },
  containerBodyItem: {
    flexDirection: 'row',
    paddingTop: 15,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: '#eeeeee',
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
  order: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  containerVarian: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  varian: {
    fontSize: 11,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
    backgroundColor: '#fafafa',
    padding: 5,
  },
  containerVoucher: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#eeeeee',
    paddingHorizontal: 10,
  },
  containerVoucherIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voucher: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Aesthet Nova Regular',
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
    fontSize: 12,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
});

export default RenderCart;
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { ItemCart } from '.';
import { colors } from '../../src/config/colors';

const data = [
  {
    id: 1,
    namaPenjual: 'Toko Era',
    order: 'Soto Ayam Kampung',
    varian: 'pedas',
    jumlah: 1,
    harga: 7000,
    image:
      'https://piknikdong.com/wp-content/uploads/2020/05/Resep-Soto-Ayam-Enak-dan-Mudah.jpg',
  },
  {
    id: 2,
    namaPenjual: 'Toko Mega',
    order: 'Ayam Bakar Madu',
    varian: 'tidak pedas',
    jumlah: 3,
    harga: 15000,
    image:
      'https://cdn-cas.orami.co.id/parenting/original_images/3_Resep_Ayam_Bakar_Madu_-2.jpg',
  },
  {
    id: 3,
    namaPenjual: 'Toko Rina',
    order: 'Ceker Bledek',
    varian: 'pedas level 5',
    jumlah: 2,
    harga: 5000,
    image:
      'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/820ab699-c6fe-4feb-9ee8-ac562bcbc9ab_257b260d-b549-46f8-8c96-8dd800b4ce43_Go-Biz_20190621_081244.jpeg',
  },
  {
    id: 4,
    namaPenjual: 'Toko Misa',
    order: 'Batagor & Siomay',
    varian: 'pedas + gk pakai kubis',
    jumlah: 5,
    harga: 8000,
    image: 'https://cf.shopee.co.id/file/803ea4c9a7df121a02d0edcbce02c9be',
  },
];

const total = () => {
  let total = 0;
  data.map(value => {
    total += value.jumlah * value.harga
  })
  return total;
}

const Cart = () => {
  const [all, setAll] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Cart</Text>
      </View>
      <Location />
      <FlatList
        data={data}
        renderItem={({item}) => <ItemCart item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 5,
        }}
      />
      <Checkout all={all} />
    </View>
  );
}

const Location = () => {
  return (
    <View style={styles.containerLocation}>
      <View style={styles.containerMaps}>
        <Icon name="google-maps" color={'red'} size={22} />
        <Text style={styles.location}>Jawa Tengah, Surakarta, Sondakan</Text>
      </View>
      <Icon name="chevron-right" color={colors.dimGray} size={22} />
    </View>
  );
}

const Checkout = ({all}) => {
  return (
    <View style={styles.containerCheckout}>
      <View style={styles.containerAll}>
        <RadioButton
          value="first"
          status={all === 'all' ? 'checked' : 'unchecked'}
          onPress={() => setAll('all')}
          color={colors.dimGray}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  containerLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: colors.dimGray,
  },
  containerCheckout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  containerAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAll: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  containerTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  total: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  harga: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: 'red',
  },
  containerButtonCheckout: {
    backgroundColor: colors.darkSpringGreen,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  checkout: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.white,
  },
});

export default Cart;
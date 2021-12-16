import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../src/config/colors';

const data = [
  {
    id: 1,
    namaPenjual: 'Toko Era',
    statusPengiriman: 0,
    order: 'Soto Ayam Kampung',
    varian: 'pedas',
    jumlah: 1,
    harga: 7000,
    produk: 1,
    kurir: 'Pesanan diambil dari penjual',
    image:
      'https://piknikdong.com/wp-content/uploads/2020/05/Resep-Soto-Ayam-Enak-dan-Mudah.jpg',
  },
  {
    id: 2,
    namaPenjual: 'Toko Mega',
    statusPengiriman: 1,
    order: 'Ayam Bakar Madu',
    varian: 'tidak pedas',
    jumlah: 3,
    harga: 15000,
    produk: 1,
    kurir: 'Pesanan diterima pembeli',
    image:
      'https://cdn-cas.orami.co.id/parenting/original_images/3_Resep_Ayam_Bakar_Madu_-2.jpg',
  },
  {
    id: 3,
    namaPenjual: 'Toko Rina',
    statusPengiriman: 1,
    order: 'Ceker Bledek',
    varian: 'pedas level 5',
    jumlah: 2,
    harga: 5000,
    produk: 1,
    kurir: 'Pesanan diterima pembeli',
    image:
      'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/820ab699-c6fe-4feb-9ee8-ac562bcbc9ab_257b260d-b549-46f8-8c96-8dd800b4ce43_Go-Biz_20190621_081244.jpeg',
  },
  {
    id: 4,
    namaPenjual: 'Toko Misa',
    statusPengiriman: 1,
    order: 'Batagor & Siomay',
    varian: 'pedas + gk pakai kubis',
    jumlah: 5,
    harga: 8000,
    produk: 1,
    kurir: 'Pesanan diterima pembeli',
    image: 'https://cf.shopee.co.id/file/803ea4c9a7df121a02d0edcbce02c9be',
  },
];

const Orders = ({}) => {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Order</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10
        }}
      />
    </View>
  );
};

const Item = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerItem}>
      <View style={styles.headerItem}>
        <Text style={styles.namaPenjual}>{item.namaPenjual}</Text>
        <Text style={styles.statusPengiriman}>
          {item.statusPengiriman === 0 ? 'Dalam Pengiriman' : 'Selesai'}
        </Text>
      </View>
      <View style={styles.bodyItem}>
        <View style={styles.boxImage}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.boxOrder}>
          <Text style={styles.order}>{item.order}</Text>
          <View style={styles.boxVarian}>
            <Text style={styles.varian}>{item.varian}</Text>
            <Text style={styles.jumlah}>{item.jumlah} x</Text>
          </View>
          <Text style={styles.harga}>Rp. {item.harga}</Text>
        </View>
      </View>
      <View style={styles.boxProduk}>
        <Text style={styles.jumlahProduk}>{item.produk} produk</Text>
        <View style={styles.boxPesanan}>
          <Text style={styles.titleTotal}>Total Pesanan: </Text>
          <Text style={styles.totalPesanan}>
            Rp. {item.jumlah * item.harga}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxKurir}>
          <Icon name="truck" color={colors.forestGreenCrayolan} size={20} />
          <Text style={styles.kurir}>{item.kurir}</Text>
        </View>
        <TouchableOpacity style={styles.boxDetail} onPress={() => navigation.navigate('DetailOrders')}>
          <Text style={styles.detail}>Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
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
  containerItem: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 10,
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  namaPenjual: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
    marginLeft: 10,
  },
  statusPengiriman: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.forestGreenCrayolan,
  },
  bodyItem: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    borderColor: colors.forestGreenCrayolan,
  },
  boxImage: {
    borderWidth: 1,
    marginLeft: 5,
    borderColor: colors.forestGreenCrayolan,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
  },
  boxOrder: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  order: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  boxVarian: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  varian: {
    fontSize: 13,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  jumlah: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  harga: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.forestGreenCrayolan,
    textAlign: 'right',
  },
  boxProduk: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.forestGreenCrayolan,
  },
  jumlahProduk: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
    marginLeft: 5
  },
  boxPesanan: {
    flexDirection: 'row',
  },
  titleTotal: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  totalPesanan: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.forestGreenCrayolan,
  },
  titlePesanan: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.dimGray,
  },
  footer: {
    marginLeft: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.darkSpringGreen,
    justifyContent: 'space-between',
  },
  boxKurir: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kurir: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.forestGreenCrayolan,
    marginLeft: 5,
  },
  boxDetail: {
    backgroundColor: colors.forestGreenCrayolan,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  detail: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.white,
    fontWeight: '700',
  },
});

export default Orders;
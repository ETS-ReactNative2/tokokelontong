import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, ICONS } from '../../constants';

const RenderOrders = ({item}) => <Item item={item} />;

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
          <Icon name={ICONS.truck} color={COLORS.forestGreenCrayolan} size={20} />
          <Text style={styles.kurir}>{item.kurir}</Text>
        </View>
        <TouchableOpacity
          style={styles.boxDetail}
          onPress={() => navigation.navigate('DetailOrders')}>
          <Text style={styles.detail}>Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    color: COLORS.dimGray,
    marginLeft: 10,
  },
  statusPengiriman: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.forestGreenCrayolan,
  },
  bodyItem: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    borderColor: COLORS.forestGreenCrayolan,
  },
  boxImage: {
    borderWidth: 1,
    marginLeft: 5,
    borderColor: COLORS.forestGreenCrayolan,
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
    color: COLORS.dimGray,
  },
  boxVarian: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  varian: {
    fontSize: 13,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  jumlah: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  harga: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.forestGreenCrayolan,
    textAlign: 'right',
  },
  boxProduk: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: COLORS.forestGreenCrayolan,
  },
  jumlahProduk: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
    marginLeft: 5,
  },
  boxPesanan: {
    flexDirection: 'row',
  },
  titleTotal: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  totalPesanan: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.forestGreenCrayolan,
  },
  titlePesanan: {
    fontSize: 16,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.dimGray,
  },
  footer: {
    marginLeft: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.darkSpringGreen,
    justifyContent: 'space-between',
  },
  boxKurir: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kurir: {
    fontSize: 14,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.forestGreenCrayolan,
    marginLeft: 5,
  },
  boxDetail: {
    backgroundColor: COLORS.forestGreenCrayolan,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  detail: {
    fontSize: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.white,
    fontWeight: '700',
  },
});

export default RenderOrders;

import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { BackHandler, FlatList, Image, Text, View} from 'react-native';
import { colors } from '../../src/config/colors';
import { colorContext } from '../BottomTab';
import { ListHeaderRecipe } from './ListHeaderRecipe';

const data = [
  {
    resep: 'Soto Daging Sapi',
    by: 'Dapurmu',
    total: 12,
    uri: 'https://asset.kompas.com/crops/UmwOlWJ-4Ze8stJoNZ2w5I_n9yw=/0x25:500x358/750x500/data/photo/2020/03/20/5e7499e3e5a49.jpg',
  },
  {
    resep: 'Ayam Jamur masak Paprika',
    by: 'Monica',
    total: 11,
    uri: 'https://img-global.cpcdn.com/recipes/769c59ee0a6a85a7/680x482cq70/ayam-jamur-masak-paprika-foto-resep-utama.webp',
  },
  {
    resep: 'Udang kecil masak barbeque',
    by: 'Cici Lestari',
    total: 5,
    uri: 'https://img-global.cpcdn.com/recipes/7162663ac61d2928/680x482cq70/udang-kecil-masak-barbeque-foto-resep-utama.webp',
  },
  {
    resep: 'Acar Bumbu Kuning',
    by: 'Eby Kitchen',
    total: 4,
    uri: 'https://img-global.cpcdn.com/recipes/91368d8529cdfa61/680x482cq70/acar-masak-bumbu-kuning-foto-resep-utama.webp',
  },
  {
    resep: 'Ikan Haruan Kecap',
    by: 'Anamaria',
    total: 2,
    uri: 'https://img-global.cpcdn.com/recipes/4317e9976451143a/680x482cq70/ikan-haruan-masak-kecap-foto-resep-utama.webp',
  },
  {
    resep: 'Mochi Tepung Ketan Hitam (Masak teflon)',
    by: 'Nur Erma',
    total: 8,
    uri: 'https://img-global.cpcdn.com/recipes/eed3af20b93102d9/680x482cq70/mochi-tepung-ketan-hitam-masak-teflon-foto-resep-utama.webp',
  },
  {
    resep: 'Kroket Cumi',
    by: 'First Time Mom',
    total: 7,
    uri: 'https://img-global.cpcdn.com/recipes/c0b32852ff8d91cc/680x482cq70/kroket-cumi-finger-food-mpasi-10-bulan-foto-resep-utama.webp',
  },
  {
    resep: 'Ikan asap masak kuning',
    by: 'Fitria M',
    total: 6,
    uri: 'https://img-global.cpcdn.com/recipes/99a81ec3dda444c1/680x482cq70/ikan-asap-masak-kuning-foto-resep-utama.webp',
  },
  {
    resep: 'Ayam masak tauco',
    by: 'Widhiyawati A',
    total: 5,
    uri: 'https://img-global.cpcdn.com/recipes/ea47e0e08d0fbf55/680x482cq70/ayam-masak-tauco-foto-resep-utama.webp',
  },
  {
    resep: 'Ayam Masak Woku',
    by: 'Andara',
    total: 2,
    uri: 'https://img-global.cpcdn.com/recipes/f22934ac34f989ab/680x482cq70/ayam-masak-woku-foto-resep-utama.webp',
  },
  {
    resep: 'Cumi masak hitam',
    by: 'Pawon Makyu',
    total: 4,
    uri: 'https://img-global.cpcdn.com/recipes/30257c7da66c9602/680x482cq70/cumi-masak-hitam-foto-resep-utama.webp',
  },
];
export const Recipe = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          backgroundColor: colors.forestGreenCrayolan,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Aesthet Nova Regular',
            color: '#fff',
          }}>
          Recipe
        </Text>
      </View>
      <FlatList
        ListHeaderComponent={
          <View>
            <ListHeaderRecipe />
            <Text
              style={{
                fontFamily: 'Aesthet Nova Regular',
                fontSize: 19,
                marginLeft: 15,
                marginBottom: 20,
                color: '#0a4823',
              }}>
              Resep Masakan
            </Text>
          </View>
        }
        data={data}
        renderItem={RenderItemVertical}
        keyExtractor={item => item.resep}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const RenderItemVertical = ({item}) => <ItemVertical item={item} />;

const ItemVertical = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 110,
        marginEnd: 10,
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'green',
        shadowOffset: {
          width: 5,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 50,
      }}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={{
          width: 90,
          height: '100%',
          borderRadius: 8,
          marginRight: 20,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          flex: 1,
          marginRight: 5,
          justifyContent: 'space-evenly',
          height: '100%'
        }}>
        <Text
          style={{
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 16,
            color: '#656565',
          }}>
          Resep {`${item.resep.slice(0,15)}...`}
        </Text>
        <Text
          style={{
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 14,
            color: '#656565',
          }}>
          by : {item.by}
        </Text>
        <Text
          style={{
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 14,
            color: colors.forestGreenCrayolan,
          }}>
          Total Resep : {item.total}
        </Text>
      </View>
    </View>
  );
};
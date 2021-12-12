import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
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

export const Cart = () => {
    return (
      <View
        style={{
          flex: 1,
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
              color: colors.white,
            }}>
            Cart
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 10
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="google-maps" color={'red'} size={22} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontFamily: 'Aesthet Nova Regular',
                color: colors.dimGray,
              }}>
              Jawa Tengah, Surakarta, Sondakan
            </Text>
          </View>
          <Icon name="chevron-right" color={colors.dimGray} size={22} />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 5
          }}
        />
      </View>
    );
}

const renderItem = ({item}) => (
  <Item item={item} />
)

const Item = ({item}) => {
  const [checked, setChecked] = useState(null);

  return (
    <View style={{
      backgroundColor: '#fff',
      marginBottom: 5
    }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5
        }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color={colors.dimGray}
        />
        <Icon name="store" color={colors.dimGray} size={25} />
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Aesthet Nova Regular',
            color: colors.dimGray,
            marginLeft: 10,
            marginRight: 5,
          }}>
          {item.namaPenjual}
        </Text>
        <Icon name="chevron-right" color={colors.dimGray} size={25} />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20
        }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color={colors.dimGray}
        />
        <Image
          source={{
            uri: item.image
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 15,
          }}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: 10,
            flex: 1,
            marginRight: 10
          }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.dimGray,
            }}>
            {item.order}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.dimGray,
            }}>
            {item.varian}
          </Text>
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Aesthet Nova Regular',
                color: 'red',
              }}>
              Rp. {item.harga}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: colors.dimGray,
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Icon name="minus" color={'#fff'} size={18} />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Aesthet Nova Regular',
                  color: colors.dimGray,
                }}>
                {item.jumlah}
              </Text>
              <View
                style={{
                  backgroundColor: colors.dimGray,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                  marginLeft: 10
                }}>
                <Icon name="plus" color={'#fff'} size={18} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
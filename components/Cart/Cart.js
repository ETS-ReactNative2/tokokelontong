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

const total = () => {
  let total = 0;
  data.map(value => {
    total += value.jumlah * value.harga
  })
  return total;
}

export const Cart = () => {
  const [all, setAll] = useState(null);

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
            padding: 10,
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
            paddingVertical: 5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            justifyContent: 'space-between',
            backgroundColor: '#fff'
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={all === 'all' ? 'checked' : 'unchecked'}
              onPress={() => setAll('all')}
              color={colors.dimGray}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontFamily: 'Aesthet Nova Regular',
                color: colors.dimGray,
              }}>
              Semua
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <View style={{
              alignItems: 'flex-end'
            }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Aesthet Nova Regular',
                  color: colors.dimGray,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Aesthet Nova Regular',
                  color: 'red',
                }}>
                Rp. {total()}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.darkSpringGreen,
                marginLeft: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Aesthet Nova Regular',
                  color: colors.white,
                }}>
                Checkout
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
}

const renderItem = ({item}) => (
  <Item item={item} />
)

const Item = ({item}) => {
  const [checked, setChecked] = useState(null);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 5,
          borderBottomWidth: 0.5,
          borderColor: '#eeeeee',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={colors.dimGray}
          />
          <Icon name="store" color={colors.dimGray} size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.dimGray,
              marginLeft: 10,
              marginRight: 5,
            }}>
            {item.namaPenjual}
          </Text>
          <Icon name="chevron-right" color={colors.dimGray} size={22} />
        </View>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Aesthet Nova Regular',
            color: colors.dimGray,
            marginRight: 10
          }}>
          Ubah
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 15,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          borderColor: '#eeeeee',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color={colors.dimGray}
            />
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 75,
                height: 75,
                marginRight: 15,
                borderRadius: 5,
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.dimGray,
            }}>
            {item.order}
          </Text>
          <View
            style={{
              marginTop: 10,
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'Aesthet Nova Regular',
                color: colors.dimGray,
                backgroundColor: '#fafafa',
                padding: 5
              }}>
              Varian : {item.varian}
            </Text>
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
                  color: colors.dimGray,
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
      <View
        style={{
          paddingVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
          borderBottomWidth: 0.5,
          borderColor: '#eeeeee',
          paddingHorizontal: 10
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="ticket-confirmation-outline"
            color={colors.darkSpringGreen}
            size={15}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.dimGray,
            }}>
            Voucher Diskon s/d Rp10RB tersedia
          </Text>
        </View>
        <Icon name="chevron-right" color={colors.dimGray} size={15} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
          paddingHorizontal: 10
        }}>
        <Icon name="truck" color={colors.darkSpringGreen} size={15} />
        <Text
          style={{
            marginLeft: 10,
            flex: 1,
            fontSize: 12,
            fontFamily: 'Aesthet Nova Regular',
            color: colors.dimGray,
          }}>
          Gratis Ongkir s/d Rp15.000 dengan min. belanja Rp. ...
        </Text>
      </View>
    </View>
  );
}
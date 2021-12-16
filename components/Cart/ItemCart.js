import React, {useState} from 'react';
import { Image, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../src/config/colors';

const ItemCart = ({item}) => {
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
            marginRight: 10,
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
                padding: 5,
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
          paddingHorizontal: 10,
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
          paddingHorizontal: 10,
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
};

export default ItemCart;
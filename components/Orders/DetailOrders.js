import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { colors } from '../../src/config/colors';
import Timeline from 'react-native-timeline-flatlist';

const data = [
  {
    time: '09.00',
    title: 'Minggu, 05 Desember 2021',
    description: 'Pesanan anda di jemput kurir'
  },
  {
    time: '10.00',
    title: 'Minggu, 05 Desember 2021',
    description: 'Pesanan anda dalam perjalanan'
  },
  {
    time: '11.00',
    title: 'Minggu, 05 Desember 2021',
    description: 'Pesanan anda sampai tujuan anda'
  },
  {
    time: '12.00',
    title: 'Minggu, 05 Desember 2021',
    description: 'Pesanan telah diterima'
  },
]

const DetailOrders = () => { 
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
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
            Detail Orders
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontFamily: 'Aesthet Nova Regular',
              color: colors.darkSpringGreen,
              marginBottom: 20,
            }}>
            Status pesanan Anda
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            <Timeline
              data={data}
              innerCircle={'dot'}
              lineColor={colors.forestGreenCrayolan}
              circleColor={colors.forestGreenCrayolan}
              timeStyle={{
                backgroundColor: '#ff9797',
                textAlign: 'center',
                color: colors.white,
                paddingHorizontal: 2,
                paddingVertical: 3,
                fontFamily: 'Aesthet Nova Regular',
                borderRadius: 8,
                fontSize: 12,
              }}
              descriptionStyle={{
                borderBottomWidth: 0.5,
                paddingBottom: 15,
                fontFamily: 'Aesthet Nova Regular',
                color: colors.darkSpringGreen,
                borderBottomColor: colors.forestGreenCrayolan,
              }}
              titleStyle={{
                color: colors.dimGray,
                fontFamily: 'Aesthet Nova Regular',
              }}
            />
          </View>
        </View>
      </View>
    );
}

export default DetailOrders;
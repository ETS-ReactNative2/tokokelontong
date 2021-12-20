import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { data, RenderOrders } from '.';
import { Header } from '..';
import { COLORS } from '../../constants';

const Orders = ({}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header text={'Order'} />
      <FlatList 
        data={data}
        renderItem={RenderOrders}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10
        }}
      />
    </View>
  );
};

export default Orders;
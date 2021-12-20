import React from 'react';
import { FlatList, View} from 'react-native';
import { data, RenderOrders } from '.';
import { Header } from '..';

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
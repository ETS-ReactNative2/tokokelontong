import React from 'react';
import {FlatList, View} from 'react-native';
import { ItemHeader } from '.';
import { IMAGE } from '../../../constants';

const data = [
  {
    title: 'Sayuran',
    image: IMAGE.veggie,
  },
  {
    title: 'Jajanan',
    image: IMAGE.snack,
  },
  {
    title: 'Alat Tulis',
    image: IMAGE.stationery,
  },
  {
    title: 'Obat',
    image: IMAGE.medical,
  },
  {
    title: 'Online Pay',
    image: IMAGE.payment,
  },
];

const RenderHeader = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={ItemHeader}
        keyExtractor={item => item.title}
        horizontal={true}
        style={{
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 1,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderHeader;
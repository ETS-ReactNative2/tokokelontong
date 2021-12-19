import React from 'react';
import {FlatList, View} from 'react-native';
import { data, ItemHeader } from '.';

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
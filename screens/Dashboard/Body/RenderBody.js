import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { data, ItemBody } from '.';
import { HeaderBox } from '..';

const RenderBody = () => {
    return (
      <View style={styles.container}>
        <HeaderBox textLeft={'Produk Terbaru'} textRight={'view all'} />
        <View>
          <FlatList
            data={data}
            renderItem={ItemBody}
            keyExtractor={item => item.title}
            horizontal={true}
            style={{
              marginTop: 30,
            }}
            contentContainerStyle={{
              paddingLeft: 20,
              paddingRight: 1,
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default RenderBody;
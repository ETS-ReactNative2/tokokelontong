import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import { ItemFooter } from '../Footer';
import { HeaderBox } from '..';
import { data } from '.'

const RenderFooter = () => {
    return (
      <View style={styles.container}>
        <HeaderBox textLeft={'Diskon Produk'} textRight={'view all'} />
        <FlatList
          data={data}
          renderItem={ItemFooter}
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: 10,
  },
});

export default RenderFooter;
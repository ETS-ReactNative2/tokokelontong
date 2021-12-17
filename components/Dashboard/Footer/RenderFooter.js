import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { ItemFooter } from '../Footer';
import { IMAGE } from '../../../constants';
import { HeaderBox } from '..';

const data = [
  {
    title: 'Salad Buah',
    image: IMAGE.salad,
    hargaNormal: '20k',
    hargaDiskon: '15k',
  },
  {
    title: 'Tiramisu',
    image: IMAGE.tiramisu,
    hargaNormal: '30k',
    hargaDiskon: '20k',
  },
  {
    title: 'Pudding',
    image: IMAGE.pudding,
    hargaNormal: '50k',
    hargaDiskon: '30k',
  },
  {
    title: 'Roti Enak',
    image: IMAGE.croissant,
    hargaNormal: '5k',
    hargaDiskon: '3k',
  },
  {
    title: 'Bubuk Kopi',
    image: IMAGE.coffe,
    hargaNormal: '15k',
    hargaDiskon: '8k',
  },
];

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
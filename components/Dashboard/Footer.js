import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { ItemFooter } from '.';
import { IMAGE } from '../../constants';

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
        <Header />
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

const Header = () => {
  return (
    <View style={styles.boxHeader}>
      <Text style={styles.titleLeft}>Diskon Hari Ini !</Text>
      <Text style={styles.titleRight}>view all</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: 10,
  },
  boxHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLeft: {
    fontSize: 20,
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
  titleRight: {
    fontFamily: 'Aesthet Nova Regular',
    color: '#656565',
  },
});

export default RenderFooter;
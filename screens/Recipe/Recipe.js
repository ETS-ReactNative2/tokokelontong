import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { data } from '.';
import { Header } from '..';
import { COLORS } from '../../constants';
import { Body } from './Body';
import { HeaderRecipe } from './Header';

const Recipe = () => {
  return (
    <View style={styles.container}>
      <Header text={'Recipe'} />
      <FlatList
        ListHeaderComponent={
          <View>
          <HeaderRecipe />
            <Text style={styles.resepTitle}>Resep Masakan</Text>
          </View>
        }
        data={data}
        renderItem={Body}
        keyExtractor={item => item.resep}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  resepTitle: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 19,
    marginLeft: 15,
    marginBottom: 20,
    color: COLORS.forestGreenTraditional,
  },
});

export default Recipe;
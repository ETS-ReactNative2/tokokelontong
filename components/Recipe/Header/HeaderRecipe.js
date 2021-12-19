import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { data, ItemHeader } from '.';

const HeaderRecipe = () => {
    return (
      <View>
        <Text style={styles.title}>Voucher Kamu</Text>
        <FlatList
          data={data}
          renderItem={ItemHeader}
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 19,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    color: '#0a4823',
  },
});

export default HeaderRecipe;
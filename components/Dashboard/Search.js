import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';

const RenderSearch = () => {
    const [search, setSearch] = useState('');
    const [parentHeight, setParentHeight] = useState(0);

    const onLayout = event => {
      const {height} = event.nativeEvent.layout;
      setParentHeight(height);
    };

    return (
      <View style={styles.containerSearch}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Toko Kelontong</Text>
          <Icon name="map-marker" size={25} color={COLORS.white} />
        </View>
        <View onLayout={onLayout} style={styles.containerBoxSearch}>
          <View style={styles.boxSearch}>
            <Icon name="magnify" size={25} color={COLORS.dimGray} />
            <TextInput
              value={search}
              onChangeText={search => setSearch(search)}
              style={{}}
              placeholder="Cari barang"
              placeholderTextColor={COLORS.dimGray}
              style={styles.search}
            />
          </View>
          <View
            style={[
              styles.boxCamera,
              {width: parentHeight, height: parentHeight},
            ]}>
            <Icon name="camera" size={20} color={COLORS.dimGray} />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  containerSearch: {
    position: 'absolute',
    top: 20,
    width: Dimensions.get('screen').width,
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Aesthet Nova Black',
  },
  containerBoxSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    height: 40,
    marginHorizontal: 20,
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 20,
  },
  search: {
    marginLeft: 5,
    fontFamily: 'Aesthet Nova Regular',
    flex: 1,
    height: 40,
    color: '#656565',
  },
  boxCamera: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default RenderSearch;
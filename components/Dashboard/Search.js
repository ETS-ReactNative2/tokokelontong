import React, { useState } from 'react';
import { Dimensions, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RenderSearch = () => {
    const [search, setSearch] = useState('');
    const [parentHeight, setParentHeight] = useState(0);

    const onLayout = event => {
      const {height} = event.nativeEvent.layout;
      setParentHeight(height);
    };

    return (
      <View
        style={{
          position: 'absolute',
          top: 20,
          width: Dimensions.get('screen').width
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontFamily: 'Aesthet Nova Black',
            }}>
            Toko Kelontong
          </Text>
          <Icon name="map-marker" size={25} color="#fff" />
        </View>
        <View
          onLayout={onLayout}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
            height: 40,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingHorizontal: 10,
              flex: 1,
              marginRight: 20,
            }}>
            <Icon name="magnify" size={25} color="#656565" />
            <TextInput
              value={search}
              onChangeText={search => setSearch(search)}
              style={{}}
              placeholder="Cari barang"
              placeholderTextColor="#656565"
              style={{
                marginLeft: 5,
                fontFamily: 'Aesthet Nova Regular',
                flex: 1,
                height: 40,
                color: '#656565',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: parentHeight,
              height: parentHeight,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon name="camera" size={20} color="#656565" />
          </View>
        </View>
      </View>
    );
}

export default RenderSearch;
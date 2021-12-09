import { StackActions } from '@react-navigation/routers';
import React, { useEffect, useRef } from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../src/config/colors';

const SplashScreen = ({navigation}) => {
  const scale = useRef(new Animated.Value(0)).current;

  const scaleAnimated = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 15,
      tension: 100,
      useNativeDriver: true
    }).start();
  }
  useEffect(() => {
    scaleAnimated();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomTab'));
    }, 1000)
  }, []);

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{scale: scale}],
            alignItems: 'center',
          }}>
          <Image
            source={require('../src/image/logosplash.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Toko</Text>
          <Text style={styles.text}>Kelontong</Text>
        </Animated.View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.forestGreenCrayolan,
  },
  image: {
    height: 100,
    width: 140,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Aesthet Nova Bold',
    fontSize: 25,
    color: '#fff',
  },
});

export default SplashScreen;
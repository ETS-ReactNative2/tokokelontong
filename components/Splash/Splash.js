import { StackActions } from '@react-navigation/routers';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IMAGE } from '../../constants';
import { colors } from '../../src/config/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomTab'));
    }, 1000)
  }, []);

    return (
      <View style={styles.container}>
        <Image
          source={IMAGE.logosplash}
          style={styles.image}
        />
        <Text style={styles.text}>Toko</Text>
        <Text style={styles.text}>Kelontong</Text>
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
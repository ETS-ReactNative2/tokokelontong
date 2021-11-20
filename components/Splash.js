import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#acd792" barStyle='light-content' hidden={true} />
        <Image
          source={require('../src/image/logosplash.png')}
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
    backgroundColor: '#acd792',
  },
  image: {
    height: 130,
    width: 170,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Aesthet Nova Bold',
    fontSize: 25,
    color: '#fff',
  },
});

export default SplashScreen;
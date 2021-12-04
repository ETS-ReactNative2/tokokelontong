import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {BackHandler, Button, Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const User = () => {
  let colorPencil = '#656565';
  let colorIcon = '#656565';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Profile</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.boxImage}>
          <Image
            source={{
              uri: 'https://s.kaskus.id/r540x540/images/2020/08/01/10900683_20200801104758.jpg',
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>Andik Script</Text>
        <Text style={styles.username}>@andikscript</Text>
        <View style={styles.boxFollow}>
          <Text style={styles.follower}>10 Diikuti</Text>
          <Text style={styles.follow}>15 Pengikut</Text>
        </View>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* email */}
        <View style={styles.box}>
          <Icon name="email" size={24} color={colorIcon} />
          <View style={styles.box2}>
            <View>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.email}>andikscript@gmail.com</Text>
            </View>
            <Icon name="pencil" size={20} color={colorPencil} />
          </View>
        </View>
        {/* phone */}
        <View style={styles.box}>
          <Icon name="cellphone" size={24} color={colorIcon} />
          <View style={styles.box2}>
            <View>
              <Text style={styles.title}>No. Telp</Text>
              <Text style={styles.email}>+971-50-7777777</Text>
            </View>
            <Icon name="pencil" size={20} color={colorPencil} />
          </View>
        </View>
        {/* twitter */}
        <View style={styles.box}>
          <Icon name="twitter" size={24} color={colorIcon} />
          <View style={styles.box2}>
            <View>
              <Text style={styles.title}>Twitter</Text>
              <Text style={styles.email}>@andikscript</Text>
            </View>
            <Icon name="pencil" size={20} color={colorPencil} />
          </View>
        </View>
        {/* alamat */}
        <View style={styles.box}>
          <Icon name="map-marker" size={24} color={colorIcon} />
          <View style={styles.box2}>
            <View>
              <Text style={styles.title}>Alamat</Text>
              <Text style={styles.email}>Ponorogo, IDN</Text>
            </View>
            <Icon name="pencil" size={20} color={colorPencil} />
          </View>
        </View>
        {/* logout */}
        <View style={styles.box}>
          <Icon name="logout-variant" size={24} color={colorIcon} />
          <View style={styles.box2}>
            <Text style={styles.title}>Logout</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#acd792',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: '#fff',
  },
  profile: {
    backgroundColor: '#acd792',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  boxImage: {
    borderRadius: 50,
    shadowColor: '#fff',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 19,
    color: '#fff',
    marginTop: 15,
  },
  username: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: '#fff',
  },
  boxFollow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('screen').width / 2,
  },
  follower: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 13,
    color: '#fff',
  },
  follow: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 13,
    color: '#fff',
  },
  scroll: {
    padding: 15,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10,
    paddingTop: 8,
    marginBottom: 10,
  },
  box2: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 15,
    color: '#656565',
    marginBottom: 5,
  },
  email: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: '#acd792',
  },
});
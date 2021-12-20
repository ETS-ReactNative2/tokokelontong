import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, ICONS } from '../../constants';
import { Header } from '..';
import { data } from '.';

const User = () => {
  return (
    <View style={styles.container}>
      <Header text={'Profile'} />
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
      {
        data.map((value, i) => {
          return (
            <View style={styles.box} key={i} >
              <Icon name={value.icon} size={24} color={COLORS.dimGray} />
              <View style={styles.box2}>
                <View>
                  <Text style={styles.title}>{value.title}</Text>
                  <Text style={styles.email}>{value.fill}</Text>
                </View>
                <Icon name={value.pencil} size={20} color={COLORS.dimGray} />
              </View>
            </View>
          );
        })
      }
        {/* logout */}
        <View style={styles.box}>
          <Icon name={ICONS.logout} size={24} color={COLORS.dimGray} />
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
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.forestGreenCrayolan,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.white,
  },
  profile: {
    backgroundColor: COLORS.forestGreenCrayolan,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  boxImage: {
    borderRadius: 50,
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
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 19,
    color: COLORS.white,
    marginTop: 15,
  },
  username: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: COLORS.white,
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
    color: COLORS.white,
  },
  follow: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 13,
    color: COLORS.white,
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
    color: COLORS.dimGray,
    marginBottom: 5,
  },
  email: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 14,
    color: COLORS.seaGreen,
  },
});

export default User;
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../src/config/colors';
import Timeline from 'react-native-timeline-flatlist';
import { Header } from '..';
import { data } from '.';

const DetailOrders = () => { 
    return (
      <View style={styles.container}>
        <Header text={'Detail Orders'} />
        <View style={styles.containerTimeline}>
          <Text style={styles.textTitle}> Status pesanan Anda</Text>
          <View style={{flex: 1}}>
            <Timeline
              data={data}
              innerCircle={'dot'}
              lineColor={colors.forestGreenCrayolan}
              circleColor={colors.forestGreenCrayolan}
              timeStyle={styles.timeline}
              descriptionStyle={styles.timelineDesc}
              titleStyle={styles.titleTimeline}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerTimeline: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.darkSpringGreen,
    marginBottom: 20,
  },
  timeline: {
    backgroundColor: '#ff9797',
    textAlign: 'center',
    color: colors.white,
    paddingHorizontal: 2,
    paddingVertical: 3,
    fontFamily: 'Aesthet Nova Regular',
    borderRadius: 8,
    fontSize: 12,
  },
  timelineDesc: {
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    fontFamily: 'Aesthet Nova Regular',
    color: colors.darkSpringGreen,
    borderBottomColor: colors.forestGreenCrayolan,
  },
  titleTimeline: {
    color: colors.dimGray,
    fontFamily: 'Aesthet Nova Regular',
  },
});

export default DetailOrders;
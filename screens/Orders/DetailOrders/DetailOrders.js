import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { data } from '.';
import { Header } from '../..';
import { COLORS } from '../../../constants';

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
              lineColor={COLORS.forestGreenCrayolan}
              circleColor={COLORS.forestGreenCrayolan}
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
    backgroundColor: COLORS.white,
  },
  containerTimeline: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: COLORS.darkSpringGreen,
    marginBottom: 20,
  },
  timeline: {
    backgroundColor: COLORS.lightCoral,
    textAlign: 'center',
    color: COLORS.white,
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
    color: COLORS.darkSpringGreen,
    borderBottomColor: COLORS.forestGreenCrayolan,
  },
  titleTimeline: {
    color: COLORS.dimGray,
    fontFamily: 'Aesthet Nova Regular',
  },
});

export default DetailOrders;
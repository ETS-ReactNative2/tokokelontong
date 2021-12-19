import React, {useCallback, useContext, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { colorContext } from './BottomTab';
import { colors } from '../../src/config/colors';

const ButtonTab = ({position, navigations, icon}) => {
  const navigation = useNavigation();
  const {colorBackground, setColorBackground} = useContext(colorContext);
  const scale = useRef(new Animated.Value(0)).current;

  const scaleSpring = useCallback(() => {
    scale.setValue(0);
    Animated.spring(scale, {
      toValue: 1,
      friction: 100,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, [])

  useEffect(() => {
    scaleSpring();
  }, [])

  return (
    <TouchableHighlight
      style={[
        styles.buttonContainer,
        {
          backgroundColor:
            colorBackground === position ? colors.white : 'transparent',
        },
      ]}
      onPress={() => {
        setColorBackground(position);
        navigation.navigate(navigations);
        scaleSpring();
      }}
      underlayColor={colors.forestGreenCrayolan}>
      <View style={styles.boxIcon}>
        <Animated.View style={{transform: [{scale: scale}]}}>
          <Icon
            name={icon}
            size={25}
            color={
              colorBackground === position
                ? colors.forestGreenCrayolan
                : colors.white
            }
          />
        </Animated.View>
        <Text
          style={[{
            color:
              colorBackground === position
                ? colors.forestGreenCrayolan
                : colors.white,
          }, styles.textIcon]}>
          {navigations}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  boxIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  textIcon: {
    fontFamily: 'Aesthet Nova Regular',
    fontSize: 11,
  },
});

export default ButtonTab;
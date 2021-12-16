import React, {useContext, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Animated,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { colorContext } from './BottomTab';
import { colors } from '../src/config/colors';

const useMount = func => useEffect(() => func(), []);

const ButtonTab = ({position, navigations, icon}) => {
  const navigation = useNavigation();
  const {colorBackground, setColorBackground} = useContext(colorContext);
  const scale = useRef(new Animated.Value(0)).current;

  const scaleSpring = () => {
    scale.setValue(0);
    Animated.spring(scale, {
      toValue: 1,
      friction: 100,
      tension: 100,
      useNativeDriver: true
    }).start();
  }

  useMount(() => scaleSpring());

  return (
    <TouchableHighlight
      style={{
        backgroundColor:
          colorBackground === position ? colors.white : 'transparent',
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        marginHorizontal: 5,
      }}
      onPress={() => {
        setColorBackground(position);
        navigation.navigate(navigations);
        scaleSpring();
      }}
      underlayColor={colors.forestGreenCrayolan}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5
        }}>
        <Animated.View
          style={{
            transform: [{scale: scale}],
          }}>
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
          style={{
            color:
              colorBackground === position
                ? colors.forestGreenCrayolan
                : colors.white,
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 11,
          }}>
          {navigations}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonTab;
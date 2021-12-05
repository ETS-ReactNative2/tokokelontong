import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { colorContext } from './BottomTab';
import { colors } from '../src/config/colors';

export const ButtonTab = ({position, navigations, icon}) => {
  const navigation = useNavigation();
  const {colorBackground, setColorBackground} = useContext(colorContext);

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
      }}
      underlayColor={colors.forestGreenCrayolan}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
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
        <Text
          style={{
            color:
              colorBackground === position
                ? colors.forestGreenCrayolan
                : colors.white,
            marginBottom: 5,
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 12,
          }}>
          {navigations}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

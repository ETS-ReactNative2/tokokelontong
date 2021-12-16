import React, { useState } from 'react';
import { View } from 'react-native';
import {RenderCart, Location, Checkout} from '.';
import { Header } from '..';

const Cart = () => {
  const [all, setAll] = useState(null);

  return (
    <View style={{flex: 1}}>
      <Header text={'Cart'} />
      <Location />
      <RenderCart />
      <Checkout all={all} setAll={setAll} />
    </View>
  );
}

export default Cart;
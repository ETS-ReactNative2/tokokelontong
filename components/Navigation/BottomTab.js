import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext, useState } from 'react';
import { ButtonTab } from '.';
import { colors } from '../../src/config/colors';
import { Cart } from '../Cart';
import { Home } from '../Dashboard'
import { Orders } from '../Orders';
import { Recipe } from '../Recipe';
import { User } from '../User';

const Tab = createBottomTabNavigator();
export const colorContext = createContext({
  colorBackground: 'first',
  setColorBackground: () => {}
});

const tabScreen = [
  {
    name: 'Home',
    component: Home,
    iconActive: 'home-variant',
    iconUnactive: 'home-variant-outline',
    position: 'first',
  },
  {
    name: 'Recipe',
    component: Recipe,
    iconActive: 'book',
    iconUnactive: 'book-outline',
    position: 'second',
  },
  {
    name: 'Cart',
    component: Cart,
    iconActive: 'home-variant',
    iconUnactive: 'home-variant-outline',
    position: 'third',
  },
  {
    name: 'Orders',
    component: Orders,
    iconActive: 'shopping',
    iconUnactive: 'shopping-outline',
    position: 'fourth',
  },
  {
    name: 'User',
    component: User,
    iconActive: 'account',
    iconUnactive: 'account-outline',
    position: 'fifth',
  },
];

const BottomTab = () => {
  const [colorBackground, setColorBackground] = useState('first');
  const changeValue = {colorBackground, setColorBackground};

    return (
      <colorContext.Provider value={changeValue}>
        <Tab.Navigator
          backBehavior={'none'}
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 60,
              backgroundColor: colors.forestGreenCrayolan,
            },
          }}>
          {
            tabScreen.map((value, i) => {
              return (
                <Tab.Screen
                name={value.name}
                component={value.component}
                options={{
                  tabBarButton: () => (
                    <ButtonTab
                      navigations={value.name}
                      icon={
                        colorBackground === value.position
                          ? value.iconActive
                          : value.iconUnactive
                      }
                      position={value.position}
                    />
                  ),
                }}
                key={i}
              />
              )
            })
          }
        </Tab.Navigator>
      </colorContext.Provider>
    );
}

export default BottomTab;
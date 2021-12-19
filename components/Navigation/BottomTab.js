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
    id: 1,
    name: 'Home',
    component: Home,
    iconActive: 'home-variant',
    iconUnactive: 'home-variant-outline',
    position: 'first',
  },
  {
    id: 2,
    name: 'Recipe',
    component: Recipe,
    iconActive: 'book',
    iconUnactive: 'book-outline',
    position: 'second',
  },
  {
    id: 3,
    name: 'Cart',
    component: Cart,
    iconActive: 'home-variant',
    iconUnactive: 'home-variant-outline',
    position: 'third',
  },
  {
    id: 4,
    name: 'Orders',
    component: Orders,
    iconActive: 'shopping',
    iconUnactive: 'shopping-outline',
    position: 'fourth',
  },
  {
    id: 5,
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
            tabScreen.map(value => {
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
              />
              )
            })
          }
        </Tab.Navigator>
      </colorContext.Provider>
    );
}

export default BottomTab;
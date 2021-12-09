import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext, useEffect, useState } from 'react';
import { Cart } from './Cart/Cart';
import { Home } from './home/Home';
import { Orders } from './Orders/Orders';
import { User } from './User/User';
import { BackHandler, ToastAndroid } from 'react-native';
import { ButtonTab } from './ButtonTab';
import { StackRecipe } from './Recipe/StackRecipe';
import { Recipe } from './Recipe/Recipe';
import { colors } from '../src/config/colors';

const Tab = createBottomTabNavigator();
export const colorContext = createContext({
  colorBackground: 'first',
  setColorBackground: () => {}
})

export const BottomTab = ({route}) => {
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
            tabBarIconStyle: {
              marginTop: 5,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'Home'}
                  icon={
                    colorBackground === 'first'
                      ? 'home-variant'
                      : 'home-variant-outline'
                  }
                  position={'first'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Recipe"
            component={Recipe}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'Recipe'}
                  icon={colorBackground === 'second' ? 'book' : 'book-outline'}
                  position={'second'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'Cart'}
                  icon={colorBackground === 'third' ? 'cart' : 'cart-outline'}
                  position={'third'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'Orders'}
                  icon={
                    colorBackground === 'fourth'
                      ? 'shopping'
                      : 'shopping-outline'
                  }
                  position={'fourth'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'User'}
                  icon={
                    colorBackground === 'fifth'
                      ? 'account'
                      : 'account-outline'
                  }
                  position={'fifth'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </colorContext.Provider>
    );
}
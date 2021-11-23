import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext, useEffect, useState } from 'react';
import { Cart } from './Cart/Cart';
import { Home } from './home/Home';
import { Orders } from './Orders/Orders';
import { Recipe } from './Recipe/Recipe';
import { User } from './User/User';
import { BackHandler } from 'react-native';
import { ButtonTab } from './ButtonTab';

const Tab = createBottomTabNavigator();
export const colorContext = createContext({
  colorBackground: 'first',
  setColorBackground: () => {}
})

export const BottomTab = () => {
  const [colorBackground, setColorBackground] = useState('first');
  const changeValue = {colorBackground, setColorBackground};

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setColorBackground('first');
    });
  });

    return (
      <colorContext.Provider value={changeValue}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 60,
              backgroundColor: '#acd792',
            },
            tabBarIconStyle: {
              marginTop: 5,
            },
            tabBarInactiveTintColor: '#656565',
            tabBarActiveTintColor: '#fff',
          }}
          >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarButton: () => (
                <ButtonTab
                  navigations={'Home'}
                  icon={'home-variant-outline'}
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
                  icon={'book-outline'}
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
                  icon={'cart-outline'}
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
                  icon={'shopping-outline'}
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
                  icon={'account-outline'}
                  position={'fifth'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </colorContext.Provider>
    );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Cart } from './Cart/Cart';
import { Home } from './home/Home';
import { Orders } from './Orders/Orders';
import { Recipe } from './Recipe/Recipe';
import { User } from './User/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#acd792',
            height: 60,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarInactiveTintColor: '#656565',
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: {
            marginBottom: 5,
            fontFamily: 'Aesthet Nova Regular',
            fontSize: 12,
          },
          tabBarItemStyle: {
            backgroundColor: '#acd792',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home-variant-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Recipe"
          component={Recipe}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="book-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="cart-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="shopping-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account-outline" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext, useState } from 'react';
import { ButtonTab, tabScreen } from '.';
import { COLORS } from '../../constants';

const Tab = createBottomTabNavigator();
export const colorContext = createContext({
  colorBackground: 'first',
  setColorBackground: () => {}
});

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
              backgroundColor: COLORS.forestGreenCrayolan,
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
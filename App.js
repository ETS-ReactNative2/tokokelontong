import React from 'react';
import SplashScreen from './components/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab} from './components/BottomTab';
import { DetailOrders } from './components/Orders/DetailOrders';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="DetailOrders" component={DetailOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

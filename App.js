import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DetailOrders } from './components/Orders';
import { SplashScreen } from './components/Splash';
import { BottomTab } from './components/Navigation';
import { DetailRecipe } from './components/Recipe/Detail';

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
        <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
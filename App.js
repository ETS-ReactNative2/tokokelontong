import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from './screens/Splash';
import { BottomTab } from './screens/Navigation';
import { DetailRecipe } from './screens/Recipe/Detail';
import { DetailOrders } from './screens/Orders/DetailOrders';

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
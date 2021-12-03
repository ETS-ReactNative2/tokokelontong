import React, { useContext, useEffect } from 'react';
import SplashScreen from './components/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab, colorContext} from './components/BottomTab';
import { DetailRecipe } from './components/Recipe/DetailRecipe';
import { BackHandler } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('back dari App');
    });
    return () => {
      BackHandler.removeEventListener();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

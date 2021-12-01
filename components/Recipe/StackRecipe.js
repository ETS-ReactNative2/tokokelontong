import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DetailRecipe } from './DetailRecipe';
import { Recipe } from './Recipe';

const Stack = createNativeStackNavigator();

export const StackRecipe = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StackRecipe" component={Recipe} />
      </Stack.Navigator>
    );
}
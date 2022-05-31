import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomePage } from '../home/HomePage';
import { SplashPage } from '../splash/SplashPage';

const Stack = createNativeStackNavigator();

export const RouteName = {
  splash: 'Splash',
  home: 'Home',
};

export const ExpensesRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteName.splash} component={SplashPage} />
      <Stack.Screen name={RouteName.home} component={HomePage} />
    </Stack.Navigator>
  );
};

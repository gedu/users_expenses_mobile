import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import { HomePage } from '../home/HomePage';
import { SplashPage } from '../splash/SplashPage';

export const RouteName = {
  splash: 'Splash',
  home: 'Home',
} as const;

export type StackParams = {
  [RouteName.splash]: undefined;
  [RouteName.home]: undefined;
};

export type NavigationProps = {
  [RouteName.splash]: NativeStackScreenProps<
    StackParams,
    'Splash'
  >['navigation'];
  [RouteName.home]: NativeStackScreenProps<StackParams, 'Home'>['navigation'];
};

const Stack = createNativeStackNavigator<StackParams>();
const mainOptions = {
  headerShown: false,
};

export const ExpensesRoutes = () => {
  return (
    <Stack.Navigator screenOptions={mainOptions}>
      <Stack.Screen name={RouteName.splash} component={SplashPage} />
      <Stack.Screen name={RouteName.home} component={HomePage} />
    </Stack.Navigator>
  );
};

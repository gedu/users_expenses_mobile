import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import { DetailsPage } from '../details/DetailsPage';
import { PictureDetailsPage } from '../details/picture-details/PictureDetailsPage';
import { HomePage } from '../home/HomePage';
import { SplashPage } from '../splash/SplashPage';

export const RouteName = {
  splash: 'Splash',
  home: 'Home',
  details: 'Details',
  picture: 'Picture',
} as const;

export type StackParams = {
  [RouteName.splash]: undefined;
  [RouteName.home]: undefined;
  [RouteName.details]: undefined;
  [RouteName.details]: undefined;
  [RouteName.picture]: { uri: string };
};

export type NavigationProps = {
  [RouteName.splash]: NativeStackScreenProps<
    StackParams,
    'Splash'
  >['navigation'];
  [RouteName.home]: NativeStackScreenProps<StackParams, 'Home'>['navigation'];
  [RouteName.details]: NativeStackScreenProps<
    StackParams,
    'Details'
  >['navigation'];
  [RouteName.picture]: NativeStackScreenProps<StackParams, 'Picture'>;
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
      <Stack.Screen name={RouteName.details} component={DetailsPage} />
      <Stack.Screen name={RouteName.picture} component={PictureDetailsPage} />
    </Stack.Navigator>
  );
};

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { ExpensesRoutes } from './routes/routes';
import { Colors } from './theme';

const navTheme = {
  ...DefaultTheme,
  colors: { background: Colors.white },
} as Theme;

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ExpensesRoutes />
      <Toast />
    </NavigationContainer>
  );
};

export default App;

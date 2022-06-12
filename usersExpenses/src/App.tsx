import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { ExpensesRoutes } from './routes/routes';
import { Colors } from './theme';

const navTheme = {
  ...DefaultTheme,
  colors: { background: Colors.white },
} as Theme;

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ExpensesRoutes />
    </NavigationContainer>
  );
};

export default App;

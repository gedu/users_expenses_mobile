import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { ExpensesRoutes } from './routes/routes';
import { Colors } from './theme';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ExpensesRoutes />
    </NavigationContainer>
  );
};

export default App;

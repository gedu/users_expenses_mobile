import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Config from 'react-native-config';
import { ExpensesRoutes } from './routes/routes';
import { Colors } from './theme';

const App = () => {
  console.log(Config.API_URL);
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ExpensesRoutes />
    </NavigationContainer>
  );
};

export default App;

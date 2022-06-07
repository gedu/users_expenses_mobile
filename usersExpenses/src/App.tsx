import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SWRConfig } from 'swr';
import apiConfig from './common/api';
import { ExpensesRoutes } from './routes/routes';
import { Colors } from './theme';

const App = () => {
  return (
    <SWRConfig value={apiConfig}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <ExpensesRoutes />
      </NavigationContainer>
    </SWRConfig>
  );
};

export default App;

import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from './src/theme';
import { SplashPage } from './src/splash/SplashPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <SplashPage />
    </>
  );
};

export default App;

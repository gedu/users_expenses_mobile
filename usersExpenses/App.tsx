import React from 'react';
import { StatusBar } from 'react-native';
import Config from 'react-native-config';
import { SplashPage } from './src/splash/SplashPage';
import { Colors } from './src/theme';

const App = () => {
  console.log(Config.API_URL);
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <SplashPage />
    </>
  );
};

export default App;

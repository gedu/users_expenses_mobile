import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './SplashPage.style';

export const SplashPage = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Expenses</Text>
      <View style={styles.animationContainer}>
        <LottieView
          style={styles.animationItem}
          source={require('../../assets/anims/splash_anim.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

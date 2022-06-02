import LottieView from 'lottie-react-native';
import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationProps } from '../routes';
import { styles } from './SplashPage.style';

type SplashPageProps = {
  navigation: NavigationProps['Splash'];
};

export const SplashPage = ({ navigation }: SplashPageProps) => {
  useEffect(() => {
    const cancelId = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => {
      clearTimeout(cancelId);
    };
  }, [navigation]);

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

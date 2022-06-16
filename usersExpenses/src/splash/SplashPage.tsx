import LottieView from 'lottie-react-native';
import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { NavigationProps } from '../routes';
import { styles } from './SplashPage.style';

type SplashPageProps = {
  navigation: NavigationProps['Splash'];
};

export const SplashPage = ({ navigation }: SplashPageProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    const cancelId = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => {
      clearTimeout(cancelId);
    };
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('expenses')}</Text>
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
